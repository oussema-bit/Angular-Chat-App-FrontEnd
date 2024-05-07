import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {HelperService} from "../services/helper/helper-service.service";
import {Router} from "@angular/router"; // Import FormsModul
import {PopUpComponent}    from "../pop-up/pop-up.component";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postAdded: boolean = false;
  post: any = {};
  content: string = '';

  constructor(
    private http: HttpClient,
    private jwtHelper :HelperService ,
    private router: Router) { }


  submitForm() {
    const payload = {
      title: this.post.title,
      content: this.post.content,
      createdAt: new Date().toISOString() // Add system date
    };
    this.http.post('http://localhost:8083/api/forums/topics/posts/addPost', payload)
      .subscribe(
        (response) => {
          console.log('Post added successfully:', response);
          this.showSuccessPopup();
          this.postAdded = true;
        },
        (error) => {
          console.error('Error adding post:', error);
        }
      );
  }
  isSuccessPopupVisible = false;


  showSuccessPopup() {
    this.isSuccessPopupVisible = true;
  }

  closePopup() {
    this.isSuccessPopupVisible = false;
  }

  goToPostPage() {
    this.router.navigateByUrl('/post-page/:id');
  }
}
