import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './pages/my-first-comp/my-first-comp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './components/chat/message-details/message-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiModule} from "./services/User/api.module";
import {FooterComponent} from "./components/footer/footer/footer.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import { ChatPageComponent } from './pages/chat/chat-page/chat-page.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NbChatModule} from "@nebular/theme";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { UserChatComponent } from './components/chat/user-chat/user-chat.component';
import { SelectedUserChatComponent } from './components/chat/selected-user-chat/selected-user-chat.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {RoleComponent} from "./pages/role/role.component";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoadingMessageComponent } from './components/chat/loading-message/loading-message.component';
import { EventsComponent } from './pages/eventpage/events/events.component';
import { EventsdetailsComponent } from './pages/eventpage/eventsdetails/eventsdetails.component';
import {NgOptimizedImage} from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';
import { UploadVideoComponent } from './pages/upload-video/upload-video.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { EnumToArrayPipe } from './services/farouk/enum-to-array.pipe';
import { VideoComponent } from './pages/video/video.component';
import { VideoDetailsFormComponent } from './pages/video-details-form/video-details-form.component';
import {MatInputModule} from "@angular/material/input";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


const socketConfig:SocketIoConfig={
  url:"http://localhost:8083/ws",
  options:{}
}
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
    UserChatComponent,
    SelectedUserChatComponent,
    ActivateAccountComponent,
    RoleComponent,
    ForgotPasswordComponent,
    LoadingMessageComponent,
    EventsComponent,
    EventsdetailsComponent,
    UploadVideoComponent,
    VideoDetailsComponent,
    VideoListComponent,
    EnumToArrayPipe,
    VideoComponent,
    VideoDetailsFormComponent
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
    SocketIoModule.forRoot(socketConfig),
    NbChatModule,
    BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule,
    LayoutModule,
    NgOptimizedImage, ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }), MatInputModule, MatLegacyChipsModule, MatAutocompleteModule
  ],
  exports:[],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
