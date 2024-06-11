import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EventControllerService} from "../../../services/Salim/services/event-controller.service";
import {Router} from "@angular/router";
import {Event} from "../../../services/Salim/models/event";
import {HelperService} from "../../../services/helper/HelperService";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events: Event[] = [];
  addForm!:FormGroup
  event !: any
  helperuser: any[]=[];
  apiService = inject(EventControllerService)
  constructor(private eventservice:EventControllerService,private route:Router,private helperservice:HelperService) { }
  ngOnInit() {
    this.helperuser = this.helperservice.userRolesNames;
    this.fetchEvents();
    this.addForm=new FormGroup({
      location:new FormControl('',[
        Validators.required,
      ]),
      name:new FormControl('',[
        Validators.required,
      ]),
      organizer:new FormControl('',[
        Validators.required,
      ]),
      prize:new FormControl('',[
        Validators.required,
      ]),
      longitude:new FormControl('',[
        Validators.required,
      ]),
      lattitude:new FormControl('',[
        Validators.required,
      ])
    });
  }

  fetchEvents() {
    this.eventservice.getAllEvents().subscribe((data)=>{
      this.events=data
      console.log(JSON.stringify(this.events))
    });
  }

public onAddEvent(){

  this.event = this.addForm.value
    this.eventservice.createEvent({body:this.event}).subscribe(
      {next : ()=> { console.log() }}
    );

}
  public showEvent(eventid: any){
    this.eventservice.getEventById(eventid).subscribe(
    );

  }
  public editEvent(addForm: NgForm,eventid: any){
    this.event = addForm
    const params = {
      eventid: eventid,
      body: this.event
    };
    this.event = this.addForm.value
    this.eventservice.updateEvent(params).subscribe(
    );
    window.location.reload()
  }
  public deleteEvent(eventid: any){
    const params = {
      id: eventid
    };
    this.apiService.deleteEvent1(params).subscribe( response => {
        console.log('Event Updated successfully:', response);
        window.location.reload()
        // Optionally, display a success message to the user
      },
      error => {
        console.error('Error updating event:', error);
        // Optionally, display an error message to the user
      }
    );

  }

}
