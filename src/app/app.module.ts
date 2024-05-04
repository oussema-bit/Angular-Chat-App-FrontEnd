import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiModule} from "./services/User/api.module";
import { ChatPageComponent } from './chat-page/chat-page.component';
import {FooterComponent} from "./components/footer/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import {ProjectFormComponent} from "./components/bal-de-project-components/project-form/project-form.component";
import {UserService} from "./services/REST/User/user.service";
import { ConfirmationAlertComponent } from './components/confirmation-pop-up/confirmation-alert/confirmation-alert.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent,
    SignUpPageComponent,
    ChatPageComponent,
    ContestComponent,
    AdminDashboardComponent,
    FooterComponent,
    AddContestComponent,
    ProjectFormComponent,
    ConfirmationAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:8083'}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports:[],//Added for routing
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private userService : UserService
  ) {}

}
