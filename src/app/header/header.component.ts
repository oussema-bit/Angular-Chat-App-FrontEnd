import { Component } from '@angular/core';
import { Forum } from '../models/forum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  forums: any[] = [];
}
