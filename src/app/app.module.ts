import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ForumComponent } from './forum/forum.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ForumComponent,
    ForumListComponent,
    PostListComponent,
    TopicListComponent,
    CommentComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
