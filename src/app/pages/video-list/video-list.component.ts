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
  originalVideos: Video[] = []; // To hold the original unfiltered videos
  videos: Video[] = [];
  niveau = Niveau;
  visibility = Visible;
  optionEnum = OptionEnum;
  paginatedVideos: Video[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  pagesNumber: number = 0;
  selectedNiveau: string = '';
  selectedVisibility: string = '';
  selectedOption: string = '';

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.videoService.findAllVideos().subscribe({
      next: (videos) => {
        this.originalVideos = videos;
        this.videos = videos;
        this.totalItems = videos.length;
        this.pagesNumber = Math.ceil(this.totalItems / this.itemsPerPage);
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

  handleNiveauChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.selectedNiveau = element.value;
    this.applyFilters();
  }

  handleVisibilityChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.selectedVisibility = element.value;
    this.applyFilters();
  }

  handleOptionChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.selectedOption = element.value;
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredVideos = this.originalVideos;
    if (this.selectedNiveau) {
      filteredVideos = filteredVideos.filter(v => v.niveau === this.selectedNiveau);
    }
    if (this.selectedVisibility) {
      filteredVideos = filteredVideos.filter(v => v.visibility === this.selectedVisibility);
    }
    if (this.selectedOption) {
      filteredVideos = filteredVideos.filter(v => v.option === this.selectedOption);
    }
    this.videos = filteredVideos;
    this.totalItems = this.videos.length;
    this.pagesNumber = Math.ceil(this.totalItems / this.itemsPerPage);
    this.paginate();
  }


  goToVideoDetails(videoId: number): void {
    this.router.navigate(['/video', videoId]);
  }
}
