import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";
import {Router} from "@angular/router";

interface User {
  // Define the properties of the User interface
}

interface Comment {
  comment_id: number;
  content: string;
  createdBy: User;
  dislikes_count: number;
  likes_count: number;
  nestedComments: Comment[];
  parentComment: Comment | null;
  post_id: number;
  // Additional properties for likes, dislikes, and other details
  // Add them based on your backend response
  likes: number;
  dislikes: number;
  createdAt: Date;
}

interface Post {
  post_id: number;
  createdBy: string;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  comments: Comment[];

}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  postId: number = 0; // Initialize postId with a default value

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const response = await axios.get('http://localhost:8083/api/forums/topics/posts/getAllPosts');
      this.posts = response.data;
      for (const post of this.posts) {
        post.comments = await this.fetchComments(post.post_id);
        post.likes = await this.fetchLikesCount(post.post_id);
        post.dislikes = await this.fetchDislikesCount(post.post_id);
        console.log('Likes count for post', post.post_id, ':', post.likes);
        console.log('Dilikes count for post', post.post_id, ':', post.dislikes);

      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }


  async fetchComments(postId: number): Promise<Comment[]> {
    try {
      const response = await axios.get(`http://localhost:8083/api/forums/topics/posts/comments/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }
  async fetchLikesCount(postId: number): Promise<number> {
    try {
      const response = await axios.get(`http://localhost:8083/api/forums/topics/posts/${postId}/likes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching likes count:', error);
      return 0;
    }
  }

  async fetchDislikesCount(postId: number): Promise<number> {
    try {
      const response = await axios.get(`http://localhost:8083/api/forums/topics/posts/${postId}/dislikes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching dislikes count:', error);
      return 0;
    }
  }

  async likePost(postId: number) {
    try {
      const response = await axios.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/like`);
      const post = this.posts.find(p => p.post_id === postId);
      if (post) {
        post.likes++;
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  }

  async dislikePost(postId: number) {
    try {
      const response = await axios.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/dislike`);
      const post = this.posts.find(p => p.post_id === postId);
      if (post) {
        post.dislikes++;
        console.log('DISLIKED');

      }
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  }


  async shareToDiscord(postId: number) {
    try {
      console.log('Attempting to share post to Discord with postId:', postId);
      const response = await this.http.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/shareToDiscord`, {}).toPromise();
      console.log('Post shared successfully:', response);
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  }
  redirectToPostForm() {
    this.router.navigate(['/post-form']); // Replace '/post-form' with the actual route path of your post form component
  }


  addComment(content: string, postId: number) {
    console.log('Adding comment:', content, 'to post:', postId);

    // Construct the request body including the post ID
    const requestBody = {
      content: content,
      postId: postId // Include the post ID here
    };

    this.http.post('http://localhost:8083/api/forums/topics/posts/comments/addComment', requestBody)
      .subscribe((response) => {
        // Handle success response
        console.log('Comment added successfully:', response);
        // Update UI to display the new comment
      }, (error) => {
        // Handle error response
        console.error('Error adding comment:', error);
      });
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
