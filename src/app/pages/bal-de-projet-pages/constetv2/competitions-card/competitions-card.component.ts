import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-competitions-card',
  templateUrl: './competitions-card.component.html',
  styleUrls: ['./competitions-card.component.css','../competitions-page/competitions-page.component.css']
})
export class CompetitionsCardComponent {
  @Input()
  var1!:any;
}
