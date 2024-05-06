import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  protected readonly Component = Component;
}
