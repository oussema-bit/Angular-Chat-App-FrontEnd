import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from "../app.component";
import {ForumListComponent} from "../forum-list/forum-list.component";
import {ForumComponent} from "../forum/forum.component";
import {PostListComponent} from "../post-list/post-list.component";
import {TopicListComponent} from "../topic-list/topic-list.component";
import {PostComponent} from "../post/post.component";
import {PostFormComponent} from "../post-form/post-form.component";
import {TopicFormComponent} from "../topic-form/topic-form.component"

const routes: Routes = [
  { path: 'forums', component:ForumListComponent },
  { path: 'post-page/:id', component:PostListComponent },// Your default route
  {path: 'topic-page/:id' , component:TopicListComponent},
  { path: 'post/:postId', component: PostComponent },
  {path: 'post-form', component:PostFormComponent},
  {path: 'topic-form', component:TopicFormComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
