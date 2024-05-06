import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { ForumControllerService } from '../services/rym-service/services/forum-controller.service';
import {ForumComponent} from "../forum/forum.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(ForumComponent) forumComponent: ForumComponent | undefined;

  constructor(private router: Router) {
  }

  showForums: boolean = false;

  ngOnInit() {
  }



  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  showForumList() {
   this.router.navigate(['/forums'])
  }

}
