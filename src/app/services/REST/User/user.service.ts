import { Injectable } from '@angular/core';
import {AuthentificationControllerService} from "../../User/services/authentification-controller.service";
import {AuthentificationRequest} from "../../User/models/authentification-request";
import {Router} from "@angular/router";
import {SignupControllerService} from "../../User/services/signup-controller.service";
import {RoleTestControllerService} from "../../User/services/role-test-controller.service";
import {User} from "../../User/models/user";
import {UserControllerService} from "../../User/services/user-controller.service";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private router:Router,
    private authController:AuthentificationControllerService,
    private signUpController:SignupControllerService,
    private getData:RoleTestControllerService,
    private getUsers:UserControllerService,
    private http:HttpClient
  ) { }

  authenticate(user:AuthentificationRequest){

      this.authController.createAuthentificationToken({
        body:user
      }).subscribe({
        next:(reponse)=>{//code success
          sessionStorage.setItem(
            'userToken',
            <string>reponse.jwt
          );
          this.router.navigate(['contest-page']);
        },
        error:()=> console.log("Login failed!!")
      })

  }
  loading=false;
  signup(user:User){
    this.signUpController.createUser$Response({
      body:user
    }).pipe(finalize(() => this.loading = false))
      .subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:()=>{
        console.log("Registration failed !!");
      }
    });
  }

  getUserData(){

    return this.getData.hello();
  }

  getUserList(){
    return this.getUsers.getAllUsers();
  }

  verifyEmail(hash: string,email:string) {
    return this.http.put("http://localhost:8083/user/verify-account?email="+email+"&otp="+hash,{})
  }

}
