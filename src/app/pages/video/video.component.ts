import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videoUrl?: string;
  viewMode = 'list';

  setViewMode(mode: string): void {
    this.viewMode = mode;
  }

  handleVideoUploaded(url: string) {
    this.videoUrl = url;
    this.setViewMode('details');
  }
}
