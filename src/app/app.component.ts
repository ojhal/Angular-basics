import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  name = 'ojhal patwa';
  obj = {
    name: 'peter',
    age: 20,
  };
  arr = ['peter', 'joe', 'peterson'];
  a = 100;
  b = 100;
  siteUrl = window.location.href;

  getName(name: any) {
    alert('please try again');
  }

  myEvent(evt) {
    console.log(evt);
  }
  currentVal = '';
  getVal(val) {
    console.log(val);
    this.currentVal = val;
  }
}
