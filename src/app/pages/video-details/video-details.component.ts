import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../services/farouk/video.service";
import {Video} from "../../models/video.model";



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent {
  video?: Video;
  tagsArray: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.videoService.getVideoById(id).subscribe(video => {
        this.video = video;
        if (video.tags) {
          this.tagsArray = Array.from(video.tags).map(tagObj => tagObj.tag);
          console.log('Tags Array:', this.tagsArray);
        }
      });
    });
  }
}
