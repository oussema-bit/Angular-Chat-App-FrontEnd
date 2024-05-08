import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";


@Component({
  selector: 'app-show-project-details',
  templateUrl: './show-project-details.component.html',
  styleUrls: ['./show-project-details.component.css']
})
export class ShowProjectDetailsComponent implements OnInit{
  constructor(
    private router:ActivatedRoute,
    private projectService:ProjectsService
  ) {}
  project!:ProjectsDto
  concernedProject(id:number){
    this.projectService.getProjectById({id:id}).subscribe({
      next : (data: any) =>{
        this.project=data
      }
    })
  }
  projectId!:number
  ngOnInit(): void {
    this.projectId=this.router.snapshot.params['id']
    this.concernedProject(this.projectId)

  }


}