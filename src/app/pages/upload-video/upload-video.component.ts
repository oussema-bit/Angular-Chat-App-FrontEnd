import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {Component, ElementRef, EventEmitter, Injectable, Output, ViewChild} from "@angular/core";
import {throwError} from "rxjs";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
@Injectable()
export class UploadVideoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile?: File;
  uploadProgress?: number;
  isDragOver = false;
  showDetailsForm = false;
  showButton = false;
  uploadResponse?: string;
  isUploading = false;
  videoURL?: string; // Store the video URL
  @Output() videoUploaded: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }
  showUploadButton() {
    if (this.selectedFile) {
      this.showButton = true;
      console.log('Selected file:', this.selectedFile.name);
    } else {
      this.showButton = false;
    }
  }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
      this.showUploadButton();
    }
  }

  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }
  url!:string
  uploadFiles(files: File[]): string {
    if (!files.length) return "empty file";

    this.isUploading = true;
    const formData = new FormData();
    formData.append('video', files[0]);

    this.http.post<any>('http://localhost:8083/uploadVideoS3', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // Calculate and update upload progress
          this.uploadProgress = event.total ? Math.round(100 * event.loaded / event.total) : this.uploadProgress;
        } else if (event.type === HttpEventType.Response) {
          // Handle response received
          this.videoUploaded.emit(event.body.url);
          this.url=event.body.url;
          this.uploadProgress = undefined;
          this.isUploading = false;
        }
        return event;
      }),
      catchError(error => {
        console.error('Upload error:', error);
        this.uploadProgress = undefined;
        this.isUploading = false;
        return throwError(() => new Error('Failed to upload video.'));
      })
    ).subscribe();
    return this.url ;
  }

}
