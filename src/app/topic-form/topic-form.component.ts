import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import {HelperService} from "../services/helper/helper-service.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {
  newTopic: any = {};


  constructor(private http: HttpClient, private router: Router, private cdRef: ChangeDetectorRef,
              private jwtHelper:HelperService) {}

  ngOnInit(): void {

  }
  submitForm() {
    this.newTopic.createdAt = new Date();

    // Check if userFullName is available, if not, set created_by to null or handle accordingly
    if (this.jwtHelper.userFullName) {
      this.newTopic.created_by = this.jwtHelper.userFullName;
    } else {
      // Handle the case where userFullName is not available
      // For example, set created_by to null or use a default value
      this.newTopic.created_by = null;
      // Alternatively, you can choose to skip creating the topic or show an error message to the user
      console.error('User full name is not available.');
      return;
    }

    const filteredTopic: any = {};
    Object.keys(this.newTopic).forEach(key => {
      if (this.newTopic[key] !== null && this.newTopic[key] !== undefined) {
        filteredTopic[key] = this.newTopic[key];
      }
    });

    this.http.post('http://localhost:8083/api/forums/topics/addTopic', filteredTopic)
      .subscribe((response: any) => {
        console.log('New topic created:', response);
        this.newTopic = {};
        this.router.navigateByUrl('topic-page/:id');
      }, (error) => {
        console.error('Error creating new topic:', error);
      });
  }
  goToTopicList() {
    this.router.navigateByUrl('/topic-list');
  }

  closePopup() {
  }

}
