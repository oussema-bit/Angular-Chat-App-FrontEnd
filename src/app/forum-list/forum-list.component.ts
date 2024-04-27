import {Component, OnInit} from '@angular/core';
import { Forum } from '../models/forum';
import { ForumService } from './forum.service';
@Component({
  selector: 'app-forum-list',
  template:
    `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let forum of forums" >
        <a class="nav-link" style="color: #eeeeee" [routerLink]="'/forums/' + forum.forum_name">{{ forum.forum_name }} </a>
      </li>
    </ul>
  `,
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit{
  forums: Forum[] = [] ;
  constructor(private forumService: ForumService) {}
  ngOnInit() {
    this.forumService.getForums().subscribe((forums: Forum[]) => this.forums = forums) ;
  }

}
