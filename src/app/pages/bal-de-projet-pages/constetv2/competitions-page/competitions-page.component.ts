import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ProjectsService} from "../../../../services/radhouene/services/projects.service";
import {ContestBalDeProjetService} from "../../../../services/radhouene/services/contest-bal-de-projet.service";
import {HelperService} from "../../../../services/helper/helper.service";
import {MatDialog} from "@angular/material/dialog";
import {ContestDto} from "../../../../services/radhouene/models/contest-dto";
import {ProjectsDto} from "../../../../services/radhouene/models/projects-dto";
import {
  ConfirmationAlertComponent
} from "../../../../components/confirmation-pop-up/confirmation-alert/confirmation-alert.component";
import {Contest} from "../../../../services/radhouene/models/contest";

@Component({
  selector: 'app-competitions-page',
  templateUrl: './competitions-page.component.html',
  styleUrls: ['./competitions-page.component.css','./leaderboard.scss']
})
export class CompetitionsContestPageComponent implements OnInit{

  headerContestList:Contest[]=[]
  constructor(

    private breakpointObserver: BreakpointObserver,
    private projetService : ProjectsService,
    private contestService :ContestBalDeProjetService,
    private jwtHelper : HelperService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef

  ) { }

  contestList:Array<ContestDto> = [];
  getContestList(){
    this.contestService.getAllContests().subscribe({ next : (data)=>{
        this.contestList=data
        //console.log(JSON.stringify(this.contestList));
        this.headerContestList=data.slice(0,1)
      }

    })
  }
  loading: boolean = false;
  projectListWinners:Array<ProjectsDto>=[]
  getWinnersProjects(){
    this.loading = true;
    this.projetService.getAllWinners().subscribe({
        next :(data) =>
        {
          this.projectListWinners = data.slice(0,5)
          this.loading = false;
          //console.log(JSON.stringify(this.projectList))
        }
      }
    )
  }
  myUser!:string[]
  ngOnInit(): void {
    this.myUser=this.jwtHelper.userRolesNames
    console.log("extracting roles names" , this.jwtHelper.userRolesNames)
    console.log(this.jwtHelper.userFullName)
    console.log(this.jwtHelper.userId)
    this.getWinnersProjects()
    this.getContestList()
    console.log(this.projectListWinners)
  }



  showProject(id: number | undefined) {

  }

  editProject(id: number | undefined) {

  }


  deleteTheProject(i: number | undefined, id: number | undefined) {
    if(i!=undefined && id!=undefined ){
      const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
        data: { message: 'Are you sure you want to delete?' },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.projetService.deleteProject({ id: id }).subscribe(() => {
            this.projectListWinners.splice(i, 1);
          });
        }
      });
    }
  }

  showContest(id: number | undefined) {

  }

  editContest(id: number | undefined) {

  }

  deleteTheContest(id: number | undefined, i: number) {

    if(i!=undefined && id!=undefined ){
      const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
        data: { message: 'Are you sure you want to delete this contest?' },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.contestService.deleteContestById({ id: id }).subscribe(() => {
            this.contestList.splice(i, 1);
          });
        }
      });
    }

  }
}
