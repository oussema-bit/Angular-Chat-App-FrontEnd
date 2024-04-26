import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/REST/User/user.service";
import {Router} from "@angular/router";
import {User} from "../services/User/models/user";
import {UserDetails} from "../models/UserDetails";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit{
  formsignup!:FormGroup;
  errorMsg!:string;
  user:User= {};
  confirmPassword!:string
  constructor(
    private userService:UserService,
    private router:Router
  ) {
  }
  ngOnInit(){
    this.formsignup=new FormGroup({

      name:new FormControl('',[
        Validators.required,
       // Validators.pattern('^[A-Z][a-zA-Z]*'),
        Validators.minLength(2)
        //lezmArctic
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]),
      phonenumber:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        //Validators.email
      ])
    });
  }
  signup(){
    this.userService.signup(this.user);
  }

  get_email(){
    return this.formsignup.get('email');
  }
  get_name(){
    return this.formsignup.get('name');
  }
  get_phonenumber(){
    return this.formsignup.get('phonenumber');
  }

  get_password(){
    return this.formsignup.get('password')
  }
  submit() {
    console.log(this.formsignup.value);
  }
}
