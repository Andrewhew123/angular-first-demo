import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  //******************** Angular Lesson 5 (ngFor Directive) ********************

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  /*
  objArray: Array<object> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ]
  */
  
  /*
  objArray: Post[] = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ]
  */

  /*
  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ]
  */

  objArray: Array<any> = [];

  // Add New Array Item
  addNew() {
    this.objArray.push({ id: 6, postTitle: 'Post 6'});
  }

  // Remove Array Item
  /*
  onDelete(post: any) {
    let index = this.objArray.indexOf(post); // Get the index array
    this.objArray.splice(index, 1); // Slide the array to remove it
  }
  */
  onDelete(index: number) {
    this.objArray.splice(index, 1); // Slide the array to remove it
  }


  //******************** Angular Lesson 6 (ngSwitch Directive) ********************
  stepForm: string = "Something else";

  onClick(status: string) {
    this.stepForm = status;
  }

  constructor() {
    /*
    for (let i = 0; i <this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
    */
  }
}
