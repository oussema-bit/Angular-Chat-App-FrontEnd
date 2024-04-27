import {DatePipe} from "@angular/common";

export interface Forum {
  forum_id: number;
  forum_name: string;
  description: string;
  created_by:string;
  created_at: Date;
  // Add other properties as needed (e.g., creationDate, author)
}
