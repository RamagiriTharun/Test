import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "" ;
  password : string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validate(){
    if(this.username == this.password){
      console.log("Welcome");
      this.router.navigate(["welcome"]);
    }
    else{
      console.log("plz enter valid credentials");
      
    }
  }
}

