import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { FormGroup, FormArray, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"]
})
export class ClockComponent implements OnInit {
  public time: any;
  public alarmFrmGrp: FormGroup;

  public alarms : {
    id: number,
    dateTime: string
  }[];

  constructor(private formBuilder: FormBuilder) {
    this.alarms = [];
    this.time = moment().format("HH:mm:ss");
    this.alarmFrmGrp = this.formBuilder.group({
      alarmFrmArray: new FormArray([])
    });
  }

  ngOnInit() {
    setInterval(this.clock.bind(this), 1000);
  }

  public date() {
    return moment().format("MMM Do YYYY");
  }

  public clock() {
    this.time = moment().format("HH:mm:ss");
    this.setAlarm();
  }

  get alarmFrmArray() {
    return this.alarmFrmGrp.get("alarmFrmArray") as FormArray;
  }

  public addItem() {
    this.alarmFrmArray.push(this.formBuilder.control(''));
    this.alarms.push({
      id: this.alarms.length,
      dateTime: ''
    });
  }

  public setAlarm() {
    // console.log(this.alarmFrmArray, moment(this.alarmFrmArray.controls[0].value), moment());
    if(moment(this.alarmFrmArray.controls[0].value).isSame(moment(), 'minute')) {
      alert("Alarm!!!!!");
    }
  }

  public removeItem() {
    this.alarmFrmArray.removeAt(this.alarms.length - 1);
  }
}
