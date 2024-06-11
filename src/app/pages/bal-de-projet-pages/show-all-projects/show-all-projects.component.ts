import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {HelperService} from "../../../services/helper/helper.service";
import {
  ConfirmationAlertComponent
} from "../../../components/confirmation-pop-up/confirmation-alert/confirmation-alert.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-show-all-projects',
  templateUrl: './show-all-projects.component.html',
  styleUrls: ['./show-all-projects.component.css']
})
export class ShowAllProjectsComponent implements OnInit{
  constructor(
    private projectService:ProjectsService,
    private jwtHelper:HelperService,
    private dialog: MatDialog,

  ) {
  }
  projects:ProjectsDto[]=[]
  user:string[]=[]
  getAllProject(){
    this.projectService.getAllProjects().subscribe({
      next : (data)=>{
        this.projects=data
        console.log(this.projects);
      }
    })
  }
  ngOnInit(): void {
    this.user=this.jwtHelper.userRolesNames
    this.getAllProject()
  }

  deleteTheProject(i: any, id: any) {
    if(i!=undefined && id!=undefined ){
      const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
        data: { message: 'Are you sure you want to delete this contest?' },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.projectService.deleteProject({ id: id }).subscribe(() => {
            this.projects.splice(i, 1);
          });
        }
      });
    }

  }


}
