import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-show-project-details',
  templateUrl: './show-project-details.component.html',
  styleUrls: ['./show-project-details.component.css']
})
export class ShowProjectDetailsComponent implements OnInit{
  constructor(
    private router:ActivatedRoute,
    private projectService:ProjectsService,
    public sanitizer: DomSanitizer
  ) {}
  project!:ProjectsDto
  urlSafe!: SafeResourceUrl;
  concernedProject(id:number){
    this.projectService.getProjectById({id:id}).subscribe({
      next : (data: any) =>{
        this.project=data
        if(this.project.videoUrl?.includes('videos.s3')){
          this.isAws=true;
        }
        if(this.project.videoUrl?.includes("youtube")){
          this.isYoutube=true;
        }
        console.log("isAWS" ,JSON.stringify(this.isAws))
        console.log("isYoutube" ,JSON.stringify(this.isYoutube))
        console.log(this.project.videoUrl)

        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(<string>this.project.videoUrl);
        console.log((this.urlSafe))

      }
    })
  }
  url:string= "https://www.youtube.com/watch?v=xcVZ1r53k1s&list=PLaxA49z0jsuiXfMSxO8VBH1wuVmQ7_63y";
  projectId!:number
  isYoutube:any;
  isAws:any;
  ngOnInit(): void {
    this.projectId=this.router.snapshot.params['id']
    this.concernedProject(this.projectId)
    //this.checkType(this.project)
    console.log(this.project)

  }
  checkType(pr : ProjectsDto){
    console.log(pr.videoUrl);
    if(pr.videoUrl?.includes('videos.s3')){
      this.isAws=true;
    }
    if(pr.videoUrl?.includes("youtube")){
      this.isYoutube=true;
    }

  }


}
