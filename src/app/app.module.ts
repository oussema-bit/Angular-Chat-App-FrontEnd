import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForumComponent } from './forum/forum.component';
import { RouterModule , Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ForumListComponent }, // Home route
  { path: 'forums/:forumName', component: ForumComponent }, // Example forum route
  // ... other routes
];

@NgModule({
  declarations: [
    AppComponent,
    ForumListComponent,
    HeaderComponent,
    FooterComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
