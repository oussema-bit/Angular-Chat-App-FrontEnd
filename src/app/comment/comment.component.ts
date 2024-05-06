import { Component, Input } from '@angular/core';
import {Comment as CommentModel} from "../models/comment"; // Import the Comment interface

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: CommentModel;
}
