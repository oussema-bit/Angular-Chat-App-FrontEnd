import {Component, OnInit} from '@angular/core';
import {TopicDto} from "../services/rym-service/models/topic-dto";
import {ForumControllerService} from "../services/rym-service/services/forum-controller.service";
import {TopicControllerService} from "../services/rym-service/services/topic-controller.service";
import {ActivatedRoute, Event} from "@angular/router";
import {HelperService} from "../services/helper/helper-service.service";
import {deleteTopic} from "../services/rym-service/fn/topic-controller/delete-topic";
import {updateTopic} from "../services/rym-service/fn/topic-controller/update-topic";
import {HttpClient, HttpEvent, HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: TopicDto[] = [];
  forumId!: number;

  constructor(private topicService: TopicControllerService,
              private route: ActivatedRoute ,
              private jwtHelper:HelperService,
              private http: HttpClient) {
  }
  userDetails:string[]=[]
  selectedTopic: any;
  newTopic: any = {};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.forumId = params['id'];
      console.log(this.userDetails);
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

  deleteTopic(topic: TopicDto ) {
    console.log('Deleting topic:', topic);
    const id = topic.topic_id;
    this.http.delete(`http://localhost:8083/api/forums/topics/deleteTopic/${id}`, { observe: 'events' }).subscribe(
      (event: HttpEvent<any>) => {
        console.log('Event:', event);
        if (event.type === HttpEventType.Response) {
          // Handle successful deletion
          console.log('Topic deleted successfully:', event.body);
          // Remove the deleted topic from the topics array
          this.topics = this.topics.filter(t => t.topic_id !== id);
          this.selectedTopic = null; // Reset selectedTopic after delete
        }
      },
      (error) => {
        // Handle error
        console.error('Error deleting topic:', error);
      }
    );
  }

  addTopic() {
    const newTopic: any = { title: "New Topic" }; // You can modify this to get the new topic data from a form
    this.http.post('http://localhost:8083/api/forums/topics/addTopic', newTopic).subscribe(
      (response: any) => {
        // Assuming the API returns the newly created topic, add it to the list
        this.topics.push(response);
      },
      (error) => {
        console.error('Error adding topic:', error);
      }
    );
  }
}



