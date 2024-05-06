import {Component, OnInit} from '@angular/core';
import {ForumControllerService} from "../services/rym-service/services/forum-controller.service";
import {ForumDto} from "../services/rym-service/models/forum-dto";
@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit{
  forums: ForumDto[] = [];

  constructor(private forumService: ForumControllerService) { }

  ngOnInit() {
    this.getForums();
  }

  getForums() {
    this.forumService.getAllForums()
      .subscribe(data => {
        this.forums = data;
        console.log(data)
      });
  }
}
