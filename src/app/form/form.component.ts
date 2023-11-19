import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  postTitle: string = "";
  postDetails: string = "";
  imageURL: string = "https://permacultureprinciples.com/wp-content/uploads/2013/01/Pc-Icons-Principle-9.gif";
  postURL: string = "";
  addBackground: boolean = false;

}
