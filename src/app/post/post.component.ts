import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostControllerService} from "../services/rym-service/services/post-controller.service";
import {GetPostById$Params} from "../services/rym-service/fn/post-controller/get-post-by-id";
import {Comment} from "../models/comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  postId!:number;
  postContent: string = '';
  postLikes!:number;
  postDislikes!:number;

  comments: Comment[] = [] ;
  constructor(private route: ActivatedRoute,
  private postService: PostControllerService,
) { }


  ngOnInit(): void {
    const postIdParam = this.route.snapshot.paramMap.get('postId');
    if (postIdParam !== null) {
      this.postId = +postIdParam;

      // Fetch post content
      const params: GetPostById$Params = { id: this.postId };
      this.postService.getPostById(params).subscribe(
        (post: any) => {
          this.postContent = post.content;
          this.postLikes=post.likes ;
          this.postDislikes=post.dilikes ;


        },
        (error: any) => {
          console.error('Error fetching post:', error);
        }
      );
    } else {
      console.error('Post ID not found in route parameters');
    }
  }
}
