import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ContestBalDeProjetService} from "../../../services/radhouene/services/contest-bal-de-projet.service";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {UserService} from "../../../services/REST/User/user.service";
import {ContestDto} from "../../../services/radhouene/models/contest-dto";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {User} from "../../../services/User/models/user";
import {Role} from "../../../services/User/models/role";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HelperService} from "../../../services/helper/helper.service";
import {deleteProject} from "../../../services/radhouene/fn/projects/delete-project";
import {
  ConfirmationAlertComponent
} from "../../../components/confirmation-pop-up/confirmation-alert/confirmation-alert.component";
import {MatDialog} from "@angular/material/dialog";
import {waitForAsync} from "@angular/core/testing";



@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
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
      console.log(JSON.stringify(this.contestList));
    }

    })
  }
  loading: boolean = false;
  projectList:Array<ProjectsDto>=[]
  getWinnersProjects(){
    this.loading = true;
    this.projetService.getAllWinners().subscribe({
    next :(data) =>
    {
      this.projectList = data
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
    this.getContestList()
    this.getWinnersProjects()
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
            this.projectList.splice(i, 1);
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
