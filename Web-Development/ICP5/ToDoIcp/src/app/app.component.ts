import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentDate: any;
  finalDate: any;
  pDateMillisecs: any;
  fDateMillisecs: any;
  diff: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2022;
  month: number = 6;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  day: number =20 ;

  constructor()
 {
   this.presentDate =new Date();
 }
  // define list of items
  items = []
  newItem :any;
  strike:any;

  // Write code to push new item
  submitNewItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  // Write code to complete item
  completeItem(i:any) {
    this.strike = i;
  }

  // Write code to delete item
  deleteItem(i:any) {
  this.items.splice(i,1);
  }


  // Count Down
  CountDown(event:any) {
    this.presentDate = new Date();
    this.finalDate = new Date(event);
    this.pDateMillisecs = this.presentDate.getTime();
    this.fDateMillisecs = this.finalDate.getTime();
    this.diff = this.fDateMillisecs - this.pDateMillisecs;
    this.seconds = Math.floor(this.diff / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
    this.hours = this.hours%24;
    this.minutes =this.minutes%60;
    this.seconds = this.seconds%60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    setInterval(this.CountDown, 1000);
  }
}
