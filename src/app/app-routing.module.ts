import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";

import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {MyFirstCompComponent} from "./pages/my-first-comp/my-first-comp.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {AboutComponent} from "./pages/about/about.component";
import {LoginComponent} from "./pages/login/login.component";
import {ChatPageComponent} from "./pages/chat/chat-page/chat-page.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {RoleComponent} from "./pages/role/role.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {EventsComponent} from "./pages/eventpage/events/events.component";
import {EventsdetailsComponent} from "./pages/eventpage/eventsdetails/eventsdetails.component";
import {UploadVideoComponent} from "./pages/upload-video/upload-video.component";
import {VideoDetailsComponent} from "./pages/video-details/video-details.component";
import {VideoListComponent} from "./pages/video-list/video-list.component";
import {VideoComponent} from "./pages/video/video.component";
import {
  CompetitionsContestPageComponent
} from "./pages/bal-de-projet-pages/constetv2/competitions-page/competitions-page.component";
import {ShowContestComponent} from "./pages/bal-de-projet-pages/show-contest/show-contest.component";
import {UpdateContestComponent} from "./pages/bal-de-projet-pages/update-contest/update-contest.component";
import {
  ShowProjectDetailsComponent
} from "./pages/bal-de-projet-pages/show-project-details/show-project-details.component";
import {UpdateProjectComponent} from "./pages/bal-de-projet-pages/update-project/update-project.component";
import {ShowAllProjectsComponent} from "./pages/bal-de-projet-pages/show-all-projects/show-all-projects.component";
import {ProjectFormComponent} from "./components/bal-de-project-components/project-form/project-form.component";
import {AddOptionComponent} from "./pages/bal-de-projet-pages/add-option/add-option.component";
import {AddCategoryComponent} from "./pages/bal-de-projet-pages/add-category/add-category.component";



const routes:Routes=[
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'role',
    component:RoleComponent
  },
  {
    path:'home',
    component:ContestComponent
  },
  {
    path:'upload-video',
    component: UploadVideoComponent
  },
  {
    path:'video',
    component: VideoComponent
  },
  {
    path:'video-list',
    component: VideoListComponent
  },
  { path: 'video/:id',
    component: VideoDetailsComponent
  },
  {
    path:'signup',
    component:SignUpPageComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'about/:username',//Path Param
    component:AboutComponent
  },
  {
    path:'notfound',//Path Param
    component:NotFoundComponent
  },
  {
    path:'messages',//Path Param
    component:ChatPageComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children :[
      {path: 'add-contest', component: AddContestComponent}
    ]
  },
  {
    path:'contest',
    component:ContestComponent
  },
  {
    path:'contest-page',
    component:CompetitionsContestPageComponent
  },
  {path: "show-contest/:id",
    component:ShowContestComponent
  },
  {path: "update-contest/:id",
    component:UpdateContestComponent
  },
  {path: "show-project-details/:id",
    component:ShowProjectDetailsComponent
  },
  {path: "update-project/:id",
    component:UpdateProjectComponent
  },
  {path: "show-all-projects",
    component:ShowAllProjectsComponent
  },
  {
    path:"add-contest",
    component:AddContestComponent
  },
  {
    path: 'add-project-form',
    component:ProjectFormComponent
  },
  {
    path:'add-option',
    component:AddOptionComponent
  },
  {
    path:"add-category",
    component:AddCategoryComponent
  },
  {path:"showevent/:id",component: EventsdetailsComponent},
  {
    path:'activateAccount/:hash/:email',
    component:ActivateAccountComponent
  },
  {
    path:'**',//route has error
    component: NotFoundComponent
  }
]//Added for Routing
@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),//Added for Routing
    RouterOutlet,
  ]
})
export class AppRoutingModule { }
