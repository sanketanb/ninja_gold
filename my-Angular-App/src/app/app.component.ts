import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// interface Data{
//   message: string,
//   data: [any]

// to use our dot notation
export class AppComponent implements OnInit {
  task = {
    total: 0,
    log: []
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.createNewTask();
  }
  createNewTask() {
    let obs = this._httpService.createNewTask(this.task);
    obs.subscribe((data) => { this.task = data['data'] }
    )
  }
  getGold(building) {
    console.log("visited", building);
    var max;
    var min;
    switch (building) {
      case 'farm':
        max = 5;
        min = 2;
        break;

      case 'cave':
        max = 15;
        min = 7;
        break;
      case 'house':
        max = 10;
        min = 5;
        break;
      case 'casino':
        max = 100;
        min = -100;
        break;
      default:
        console.log("something mysterious happened!");
    }
    console.log("building", building);
    let newgold = Math.floor(Math.random() * (max - min + 1) + min);

    this.task.total += newgold;
    var adventure;
    if (newgold >= 0){
      adventure = `you earned ${newgold} at the ${building}`
    }
    else {
      adventure = `you lost ${Math.abs(newgold)} at the ${building}`
    }
    this.task.log.push(adventure);
    let obs = this._httpService.updateTask(this.task);
    obs.subscribe(data => console.log("got the info from updating", data))
  }
}