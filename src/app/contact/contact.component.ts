import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLinkedIn(){
    window.open("https://www.linkedin.com/in/laurynsue");
  }

  openGithub(){
    window.open("https://www.github.com/laurynsue");
  }

  openEmail(){
    window.open("mailto:laurynsue98@gmail.com");
  }

}
