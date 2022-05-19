import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() user: string = "" ;
  constructor(private route:ActivatedRoute) {
   }

  ngOnInit(): void {
  }


}
