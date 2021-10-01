import { Component, OnInit } from '@angular/core';

declare var consoleText: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new consoleText();
  }

}
