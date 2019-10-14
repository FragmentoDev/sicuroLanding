import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  currentSection = 'sesion';

  constructor() { }

  ngOnInit() {}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log('current section:', this.currentSection);
  }
}
