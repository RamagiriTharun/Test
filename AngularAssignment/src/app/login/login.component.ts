import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  
  username : string = "" ;
  password : string = "";
  valid : boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  


  validate(data:any){
    if(this.username == this.password){
      this.valid = true;
      console.log("Welcome");
      alert("Login Successful");
      this.username = data.username;
      this.newItemEvent.emit(this.valid);
    }
    else{
      this.valid = false;
      console.log("plz enter valid credentials");
      alert("Enter valid credentials");
    }
  }
  
}

