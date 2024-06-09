import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../services/farouk/video.service";
import {Router} from "@angular/router";
import {Video} from "../../models/video.model";
import {Niveau, OptionEnum, Visible} from "../../models/video-enums";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos: Video[] = [];
  niveau = Niveau;
  visibility = Visible;
  optionEnum = OptionEnum;
  paginatedVideos: Video[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;  // Adjust as needed
  totalItems: number = 0;
  pagesNumber: number = 0;
  constructor(private videoService: VideoService,private router: Router ) {}


  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.videoService.findAllVideos().subscribe({
      next: (videos) => {
        this.videos = videos;
        this.totalItems = videos.length;
        if (this.totalItems % this.itemsPerPage === 0) {
          this.pagesNumber = this.totalItems / this.itemsPerPage;
        }else {
          this.pagesNumber = Math.floor(this.totalItems / this.itemsPerPage) + 1;
        }
        this.paginate();
      },
      error: (err) => console.error('Failed to load videos', err)
    });
  }
  paginate(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    this.paginatedVideos = this.videos.slice(startIndex, endIndex);
  }
  handleNiveauChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    const niveau = element.value;
    this.videoService.findVideosByNiveau(niveau).subscribe(data => {
      this.videos = data;
    });
  }

  handleVisibilityChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    const visibility = element.value;
    this.videoService.findVideosByVisibility(visibility).subscribe(data => {
      this.videos = data;
    });
  }

  handleOptionChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    const option = element.value;
    this.videoService.findVideosByOption(option).subscribe(data => {
      this.videos = data;
    });
  }

  goToVideoDetails(videoId: number): void {
    this.router.navigate(['/video', videoId]);
  }
}
