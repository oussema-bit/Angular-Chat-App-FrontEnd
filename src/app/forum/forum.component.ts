import { Component } from '@angular/core';
import { ForumService } from '../forum-list/forum.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forums: any[] = [];

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getForums()
      .subscribe(forums => this.forums = forums);
  }
}
