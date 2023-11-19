import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  name: string = "";
  email: string = "";
  address: string = "";

  userArray: Array<any> = [];

  onClick() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })

    console.log(this.userArray);
  }

  onDelete(index: number) {
    this.userArray.splice(index, 1);
  }

  constructor() {

  }
}
