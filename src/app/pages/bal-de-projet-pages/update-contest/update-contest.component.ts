import {Component, OnInit} from '@angular/core';
import {Option} from "../../../services/radhouene/models/option";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OptionsService} from "../../../services/radhouene/services/options.service";
import {ContestBalDeProjetService} from "../../../services/radhouene/services/contest-bal-de-projet.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ContestDto} from "../../../services/radhouene/models/contest-dto";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Contest} from "../../../services/radhouene/models/contest";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-contest',
  templateUrl: './update-contest.component.html',
  styleUrls: ['./update-contest.component.css']
})
export class UpdateContestComponent implements OnInit{
  niveauOptions = ['PREMIERE', 'DEUXIEME', 'TROIXIEME', 'QUATRIEME', 'CINQUEME'];
  optionSpecialityList : Option[]=[]
  contestToSave !:any;
  projectList:ProjectsDto[]=[]



  contestForm!:FormGroup
  constructor(
    private optionService : OptionsService,
    private contestService : ContestBalDeProjetService,
    private projectService: ProjectsService,
    private activatedRoute:ActivatedRoute,
    private  http :HttpClient

  ) {
  }
  fillOptionList(){
    this.optionService.getAllOptions1().subscribe({
      next :
        (data)=> {
          this.optionSpecialityList=data;
          console.log(this.optionSpecialityList);

        }
    })
  }
  fillProjectList():ProjectsDto[]{
    this.projectService.getAllProjects().subscribe({
      next : (data)=>{
        this.projectList = data
      }
    })
    return  this.projectList;
  }



  optionid !: number;
  currentContestId!:number
  ngOnInit(): void {
    this.currentContestId=this.activatedRoute.snapshot.params["id"]
    this.fillProjectList()
    this.fillOptionList()
    this.contestForm = new FormGroup({
      deadline: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl(""),
      name: new FormControl('',[Validators.required]),
      niveau: new FormControl('',[Validators.required]),
      option: new FormControl('',[Validators.required]),
      project: new FormControl('',)
    })
    this.getCurrentContest(this.currentContestId)
  }
  currentContest!:Contest
  getCurrentContest(id:any){
    this.contestService.getContestById({id : id}).subscribe({
      next :(data)=> {
        this.currentContest = data
        this.contestForm.patchValue(this.currentContest )
        console.log(this.currentContest," logging currentContest");
      }
      })
  }



  loading !: boolean
  projectId !: number
  updateContest()   {
    this.projectId=this.contestForm.get('project')?.value//extracting project id
    console.log(this.projectId)
    this.optionid=this.contestForm.get('option')?.value // getting the option id from the form
    this.contestToSave=this.contestForm.value;// affecting the form to the contest variable
    console.log(this.contestToSave);
    this.contestToSave.option={}
    this.loading = true;
    console.log(" outside the promise ", this.contestToSave.option);
    // loging the contest variable
    //saving the contest , the customSaveContest takes 2 variables , the body of the contest to save and the option id
    this.contestService.updateContest({ id: this.currentContestId,optionId: this.optionid, body: this.contestToSave }).subscribe()//updating
    this.contestService.assignProjectToContest({contestDtoID: this.currentContestId ,projectId: this.projectId}).subscribe()//asigning project to contest
    this.uploadimage()
    Swal.fire('New Event Upcoming!','','success').then(res=>window.location.reload())
  }






  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(event.target.files[0])
  }
  uploadimage(){
    this.uploadEventImage().subscribe()
  }
  uploadEventImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    return this.http.post(`http://localhost:8083/contest-bal-de-projet/add-image-to-contest/${this.currentContestId}`, formData);

  }
  selectedFile!: File;





}
