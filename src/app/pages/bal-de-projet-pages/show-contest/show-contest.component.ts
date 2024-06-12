import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {formatNumber} from "@angular/common";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ContestBalDeProjetService} from "../../../services/radhouene/services/contest-bal-de-projet.service";
import {HelperService} from "../../../services/helper/helper.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {ContestDto} from "../../../services/radhouene/models/contest-dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contest} from "../../../services/radhouene/models/contest";
import {
  ConfirmationAlertComponent
} from "../../../components/confirmation-pop-up/confirmation-alert/confirmation-alert.component";
import {MatDialog} from "@angular/material/dialog";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})


  export class ShowContestComponent implements OnInit{
  id!:number
  userId!:number
  voteNumber!:number
  userRoles:string[]=[]

  constructor(
    private activatedRoute :ActivatedRoute,
    private projectsService: ProjectsService,
    private contestService : ContestBalDeProjetService,
    private jwtHelper : HelperService,
    private dialog: MatDialog,
    public sanitizer: DomSanitizer

  ) {
  }
  projectList : ProjectsDto[]=[]//to display projects that are affected to the contest
  allprojectList : ProjectsDto[]=[]//to display all the project so the admin can affect to the current contest
  contest!:Contest
  urlSafe!: SafeResourceUrl;

  fillProjectList(leId:number){
    this.projectsService.getProjectsByContest({contestId : leId}).subscribe({
      next : (data)=>{
        this.projectList=data
        for(let project of this.projectList){
          if(project.videoUrl?.includes('videos.s3')){
            project.imageUrl="AWS"
          }
          if(project.videoUrl?.includes("youtube")){
            project.imageUrl="YOUTUBE"
          }
          console.log(project)
        }
      }
    })
  }
  fillAllProjectList(){
    this.projectsService.getAllProjects().subscribe({
      next : (data)=>{
        this.allprojectList=data
        for(let project of this.allprojectList){

          if(project.videoUrl?.includes('videos.s3')){

            project.imageUrl="AWS"
          }
          if(project.videoUrl?.includes("youtube")){
            project.imageUrl="YOUTUBE"
          }
        }

      }
    })

  }

  sanitizeUrl(url:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  unassignProject(id: any,i:number){

    if(i!=undefined && id!=undefined ){
      const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
        data: { message: 'Are you sure you want to delete?' },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.contestService.unAssignProjectToContest({contestDtoID: this.id,projectId: id}).subscribe({
            next :(data)=>{
              this.projectList.splice(i,1)
            }
          })
        }
      });
    }

  }
  affectTheProjectToTheCurrentContest(){
      this.contestService.assignProjectToContest({contestDtoID: this.id, projectId: this.form.get("project")?.value}).subscribe({
        next: (data)=>{
          console.log(data)
          this.projectList.push(this.form.value)
        }
      })
    this.fillProjectList(this.id);
  }
  form!:FormGroup
  ngOnInit(): void {
    this.form= new FormGroup({
      project: new FormControl("", [Validators.required]),
    })
    this.fillAllProjectList()
    this.userId=this.jwtHelper.userId
    this.userRoles=this.jwtHelper.userRolesNames
    this.id= this.activatedRoute.snapshot.params["id"]
    this.fillProjectList(this.id)
    this.contestService.getContestById({id : this.id}).subscribe({
      next: (value)=>{
      this.contest=value;
        console.log(this.contest);
      }
    })
    if(this.contest.allowVote){
      this.winnerCall()
    }
    }
    winner!:ProjectsDto
    winnerCall(){
    this.contestService.getContestById({id : this.id}).subscribe({
      next : (data)=>{
        this.winner=data
      }
    })
    }
  async voteUp(id: any ) {
    this.projectsService.voteUp({projectId: id, userId: this.userId}).subscribe({
      next :(data)=>{
        console.log(data , "vote successfull")


      },error(msg){
        console.log(msg)
      }
    })
    this.fillProjectList(this.id);
  }

  protected readonly formatNumber = formatNumber;
}
