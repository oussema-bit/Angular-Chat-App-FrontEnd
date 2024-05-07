import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { ForumControllerService } from '../services/rym-service/services/forum-controller.service';
import {ForumComponent} from "../forum/forum.component";
import {HelperService} from "../services/helper/helper-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(ForumComponent) forumComponent: ForumComponent | undefined;

  constructor(private router: Router ,   private cdRef: ChangeDetectorRef,
              private jwtHelper:HelperService) {
  }

  showForums: boolean = false;
  userDetails:string[]=[]

  ngOnInit() {
    this.userDetails=this.jwtHelper.userRolesNames
  }



  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  showForumList() {
   this.router.navigate(['/forums'])
  }

}
