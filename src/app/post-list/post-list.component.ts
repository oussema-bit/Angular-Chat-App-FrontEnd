import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";
import {Router} from "@angular/router";
import {deletePost} from "../services/rym-service/fn/post-controller/delete-post";
import {HelperService} from "../services/helper/helper-service.service";

interface User {
  name?: string;
}

interface Comment {
  content: string;
  post_id: number;

}

interface Post {
  post_id: number;
  createdBy: User;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  comments: Comment[];
  likedBy: string[];
  dislikedBy: string[];

}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  postId: number = 0; // Initialize postId with a default value
  selectedPosts: Record<number, boolean> = {} as Record<number, boolean>;
  showCheckboxes = true;
  selectedFilter: string = 'None';
  mostLikedPostId: number | null = null;
emailSent : boolean = false;

constructor(private http: HttpClient,
              private router:Router,
              private cdRef: ChangeDetectorRef,
              private jwtHelper:HelperService) { }
  ngOnInit(): void {
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const response = await axios.get('http://localhost:8083/api/forums/topics/posts/getAllPosts');
      this.posts = response.data;

      for (const post of this.posts) {
        post.comments = await this.fetchComments(post.post_id); // Fetch comments for each post
        post.likedBy = post.likedBy || [];
        post.dislikedBy = post.dislikedBy || [];

        // Apply filter based on selectedFilter
        if (this.selectedFilter === 'None') {
          post.likes = await this.fetchLikesCount(post.post_id);
          post.dislikes = await this.fetchDislikesCount(post.post_id);
        } else if (this.selectedFilter === 'Likes') {
          post.likes = await this.fetchLikesCount(post.post_id);
          post.dislikes = 0;
        } else if (this.selectedFilter === 'Dislikes') {
          post.dislikes = await this.fetchDislikesCount(post.post_id);
          post.likes = 0;
        }
      }
      this.sortPosts();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }


  async fetchComments(postId: number): Promise<Comment[]> {
    try {
      const response = await axios.get(`http://localhost:8083/api/forums/topics/posts/comments/post/${postId}`);
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
      const post = this.posts.find(p => p.post_id === postId);
      if (!post) {
        console.error('Post not found');
        return;
      }
      if (post.likedBy.includes(String(this.jwtHelper.userId))) {
        console.log('User has already liked this post');
        return;
      }
      if (post.dislikedBy.includes(String(this.jwtHelper.userId))) {
        post.dislikes--;
        const index = post.dislikedBy.indexOf(String(this.jwtHelper.userId));
        post.dislikedBy.splice(index, 1);
      }
      const response = await axios.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/like`);
      post.likes++;
      post.likedBy.push(String(this.jwtHelper.userId));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  }

  async dislikePost(postId: number) {
    try {
      const post = this.posts.find(p => p.post_id === postId);
      if (!post) {
        console.error('Post not found');
        return;
      }
      if (post.dislikedBy.includes(String(this.jwtHelper.userId))) {
        console.log('User has already disliked this post');
        return;
      }
      if (post.likedBy.includes(String(this.jwtHelper.userId))) {
        post.likes--;
        const index = post.likedBy.indexOf(String(this.jwtHelper.userId));
        post.likedBy.splice(index, 1);
      }
      const response = await axios.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/dislike`);
      post.dislikes++;
      post.dislikedBy.push(String(this.jwtHelper.userId));
    } catch (error) {
      console.error('Error disliking post:', error);
    }

  }


  async shareToDiscord(postId: number) {
    try {
      console.log('Attempting to share post to Discord with postId:', postId);
      const response = await this.http.post(`http://localhost:8083/api/forums/topics/posts/posts/${postId}/shareToDiscord`, {}).toPromise();
      console.log('Post shared successfully:', response);
      this.showSuccessPopup();
      this.emailSent = true;
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  }

  addComment(event: Event, postId: number) {
    const content = (event.target as HTMLInputElement).value;
    const comment: Comment = {
      content: content,
      post_id: postId
    };
    this.http.post<Comment>('http://localhost:8083/api/forums/topics/posts/comments/addComment', comment)
      .subscribe(
        (response) => {
          console.log('Comment added successfully:', response);
          const post = this.posts.find(post => post.post_id === postId);
          if (post) {
            if (!post.comments) {
              post.comments = [];
            }
            post.comments.push(response);
          }
          (event.target as HTMLInputElement).value = '';
        },
        (error) => {
          console.error('Error adding comment:', error);
        }
      );
  }

  deleteSelectedPosts() {
    if (!this.hasSelectedPosts()) {
      console.warn('No posts selected for deletion');
      return;
    }

    if (confirm('Are you sure you want to delete the selected posts?')) {
      const postsToDelete = Object.keys(this.selectedPosts)
        .filter(postId => this.selectedPosts[parseInt(postId)])
        .map(postId => +postId); // Convert to numbers

      const deletePromises = postsToDelete.map(postId => {
        const url = `http://localhost:8083/api/forums/topics/posts/deletePost/${postId}`;
        return this.http.delete(url).toPromise();
      });

      Promise.all(deletePromises)
        .then(() => {
          console.log("Posts deleted successfully!");
          // Update UI to remove the deleted posts
          this.posts = this.posts.filter(post => !postsToDelete.includes(post.post_id));
        })
        .catch(error => {
          console.error("Error deleting posts:", error);
        })
        .finally(() => {
          this.showCheckboxes = false; // Hide checkboxes after deletion
        });
    }
  }




  hasSelectedPosts() {
    return Object.values(this.selectedPosts).some(isSelected => isSelected);  }

  togglePostSelection(postId: number) {
    this.selectedPosts[postId] = !this.selectedPosts[postId];
    this.showCheckboxes = Object.values(this.selectedPosts).some(isSelected => isSelected);
  }
  sortPosts() {
    if (this.selectedFilter === 'None') {
      return; // No sorting for "None" filter
    }
    console.log('Sorting posts by:', this.selectedFilter); // Add this line
    const sortKey = this.selectedFilter === 'Likes' ? 'likes' : 'dislikes';
    this.posts.sort((a, b) => b[sortKey] - a[sortKey]);
    this.cdRef.detectChanges();
  }

  async fetchUser(userId: string): Promise<User> {
    try {
      const response = await axios.get(`http://localhost:8083/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  protected readonly HTMLInputElement = HTMLInputElement;
  protected readonly KeyboardEvent = KeyboardEvent;

  goGoToTopicPage() {
    this.router.navigateByUrl('topic-page/:id');
  }

  toggleCheckboxes() {
    this.showCheckboxes = !this.showCheckboxes;  }


  async pinMostLikedPost() {
    try {
      await this.http.post('http://localhost:8083/api/forums/topics/posts/pinMostLikedPost', {}).toPromise();
      console.log('Most liked post pinned successfully');

      await this.fetchPosts(); // Fetch posts again after pinning to update the list
      this.updateMostLikedPostId();
      this.moveMostLikedPostToTop();
    } catch (error) {
      console.error('Error pinning most liked post:', error);
    }
  }

  updateMostLikedPostId() {
    const mostLikedPost = this.posts.reduce((prev: Post | null, current: Post) => (prev && prev.likes > current.likes ? prev : current), null);
    this.mostLikedPostId = mostLikedPost ? mostLikedPost.post_id : null;
  }

  moveMostLikedPostToTop() {
    const mostLikedPostIndex = this.posts.findIndex(post => post.post_id === this.mostLikedPostId);
    if (mostLikedPostIndex !== -1) {
      const mostLikedPost = this.posts.splice(mostLikedPostIndex, 1)[0];
      this.posts.unshift(mostLikedPost);
    }
  }

  redirectToPostForm() {
    this.router.navigateByUrl('post-form');

  }



  closePopup() {
    this.isSuccessPopupVisible = false;
  }
  isSuccessPopupVisible = false;
  showSuccessPopup() {
    this.isSuccessPopupVisible = true;
  }
}


