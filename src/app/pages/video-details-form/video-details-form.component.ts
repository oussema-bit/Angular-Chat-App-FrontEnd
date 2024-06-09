import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Niveau, OptionEnum, videoTags, Visible} from "../../models/video-enums";
import {MatChipInputEvent} from "@angular/material/chips";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, startWith} from "rxjs/operators";
import {VideoService} from "../../services/farouk/video.service";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";

@Component({
  selector: 'app-video-details-form',
  templateUrl: './video-details-form.component.html',
  styleUrls: ['./video-details-form.component.css']
})
export class VideoDetailsFormComponent implements OnInit {
  @Input() videoUrl?: string;
  videoForm !: FormGroup;
  tagCtrl = new FormControl();
  filteredTags ?: Observable<string[]>;
  allTags : string[] = Object.values(videoTags);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  @Output() changeView = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private videoService: VideoService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }
  get tags(): FormArray {
    return this.videoForm.get('tags') as FormArray;
  }


  ngOnInit(): void {
    this.videoForm = this.fb.group({
      videoTitle: ['', Validators.required],
      videoDescription: ['', Validators.required],
      videoUrl: [this.videoUrl, Validators.required],
      videoViews: [0, Validators.min(0)],
      videoLikes: [0, Validators.min(0)],
      videoDislikes: [0, Validators.min(0)],
      visibility: ['', Validators.required],
      niveau: ['', Validators.required],
      option: ['', Validators.required],
      tags: this.fb.array([])
    });
  }
  addFromAutocomplete(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if ((value || '').trim()) {
      this.addTag(value.trim());
    }
    // Clear the input value
    if (this.tagInput) {
      this.tagInput.nativeElement.value = '';
    }
    this.tagCtrl.setValue(null);
  }


  addTag(tag: string): void {
    const tagGroup = this.fb.group({
      tag: [tag, Validators.required]
    });
    this.tags.push(tagGroup);
  }

  remove(index: number): void {
    this.tags.removeAt(index);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
  addManually(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.addTag(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  onSubmit(): void {
    console.log("Form Validity:", this.videoForm.valid);
    console.log("Form Errors:", this.videoForm.errors);
    console.log("Form Value:", this.videoForm.value);

    if (this.videoForm.valid) {
      this.videoService.addVideo(this.videoForm.value).subscribe({
        next: (response: any) => {
          this.changeView.emit('list');
          console.log('Video added successfully:', response.message);
        },
        error: (error) => {
          console.error('Failed to add video', error);
        }
      });
    } else {
      console.error("Form is not valid:", this.videoForm.getRawValue()); // Use getRawValue to see disabled fields too
    }
  }




  protected readonly Visible = Visible;
  protected readonly Niveau = Niveau;
  protected readonly OptionEnum = OptionEnum;
  protected readonly videoTags = videoTags;
}
