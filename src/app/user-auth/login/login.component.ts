import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;
  submitted = false;

  public loginForm!: FormGroup  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router : Router, private userData: UsersDataService, private toast : NgToastService){}

   getUsersData(){
    this.userData.users().subscribe((data)=>{
      // console.log("data",data); // this is for logging the entire data fetched from the api call
      this.users = data
      const result = this.users.find((a: any)=>{
        return a.userid === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(result){
        this.router.navigate(['dashboard'])

      }else{
        // toast is imported from the Nuget package - Ng Toast (https://www.npmjs.com/package/ng-angular-popup)
        this.toast.error({detail: "Invalid Credentials",summary:"Enter Correct Email and Password", duration: 5000});
      }
    }, err=>{
      alert('Something went wrong!!!')
    })
   }

  ngOnInit(): void {  
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    }) 
  }

  
}
