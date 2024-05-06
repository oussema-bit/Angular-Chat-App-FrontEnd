import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient} from "@angular/common/http"; // Import FormsModule



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  post: any = {};
  content: string = '';

  constructor(private http: HttpClient) { }


  submitForm() {
    // Create the payload object with title, content, and system date
    const payload = {
      title: this.post.title,
      content: this.post.content,
      createdAt: new Date().toISOString() // Add system date
    };

    // Send the payload to the backend URL
    this.http.post('http://localhost:8083/api/forums/topics/posts/addPost', payload)
      .subscribe(
        (response) => {
          console.log('Post added successfully:', response);
          // Handle success response (e.g., show a success message)
        },
        (error) => {
          console.error('Error adding post:', error);
          // Handle error response (e.g., show an error message)
        }
      );
  }
}
