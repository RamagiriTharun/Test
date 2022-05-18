import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private userService : UserService) { }

  public users : Users[] = [];

  ngOnInit(): void {
    this.userService.users().subscribe((data) => {
      this.users = data;
      console.warn("data",data);
    });
  }

}
