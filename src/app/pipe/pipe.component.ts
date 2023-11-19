import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  title: string = "Angular Course"
  count: number = 285645;
  dcValue: number = 3.4657

  constructor() {}
}
