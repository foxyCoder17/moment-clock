import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public time: any;
  constructor() { }

  ngOnInit() {
    setInterval(this.clock.bind(this) , 1000);
  }

  public date() {
    return moment().format("MMM Do YYYY");
  }

  public clock(){
    this.time = moment().format("HH:mm:ss");
  }

}
