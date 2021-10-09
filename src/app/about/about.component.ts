import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  openResume(){
    window.open("https://drive.google.com/file/d/1dk_nBPOLD7TFkaO_24sanPwRxE_BjegT/view?usp=sharing")
  }

  openCV(){
    window.open("https://drive.google.com/file/d/1rYQq2SNfvmX-fz9uFOS8IdCl0dyFiu-Z/view?usp=sharing")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
