import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  openResume(){
    window.open("https://drive.google.com/file/d/1PYEwMwOBT4n5uPX7DDjyE0Qvov-p99wE/view?usp=sharing")
  }

  openCV(){
    window.open("https://drive.google.com/file/d/1zVLKlV0j77Ca1Q721BUcO9VRw2vKXX9c/view?usp=sharing")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
