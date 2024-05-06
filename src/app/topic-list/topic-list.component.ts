import {Component, OnInit} from '@angular/core';
import {TopicDto} from "../services/rym-service/models/topic-dto";
import {ForumControllerService} from "../services/rym-service/services/forum-controller.service";
import {TopicControllerService} from "../services/rym-service/services/topic-controller.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: TopicDto[] = [];
  forumId!: number;

  constructor(private topicService: TopicControllerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.forumId = params['id'];
      this.getTopicsByForumId(this.forumId)
    })
  }


  private getTopicsByForumId(forumId: number) {
    // Call the service method to get topics by forum ID
    this.topicService.getAllTopicsByForum(forumId)
      .subscribe(data => {
      this.topics = data;
      console.log(data);
    });
  }


}
