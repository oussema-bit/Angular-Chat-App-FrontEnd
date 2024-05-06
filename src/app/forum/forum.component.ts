import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ForumControllerService } from '../services/rym-service/services/forum-controller.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  forums: any[] = [];
  id!:number;
  @Input() showForums: boolean = false; // Input to receive click signal

  constructor(
    private forumService: ForumControllerService,
    private act:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  getForums() {
    this.forumService.getAllForums()
      .subscribe(data => this.forums = data);
  }

  // Update logic triggered by menu click
  updateForumList() {
    if (this.showForums) {
      this.getForums(); // Fetch forums again
    }
  }
}
