import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

interface Post {
  id: number;
  postTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  //******************** Angular Lesson 1 ********************

  // Tile application
  title = 'first-demo-application';

  // Display the message from app parent to post child component 
  parentMessage: string = "Message coming from parent component";

  // Display the message from post child to app parent component
  message: string = '';

  // ViewChild initialized to retrieve the child data from post component
  @ViewChild(PostComponent) childComp!: PostComponent;

  // Retrieve the output from post(child) to app(parent) whenever the button is clicked
  fromChildOutput: string = '';

  // Use ViewChild to view the message from post(child) to app(parent)
  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage; // Message output from post child component
  }

  // Click the button to receive the message
  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }

  //******************** Angular Lesson 2 (String Interpolation & Button Click) ********************

  message_output: string = 'Message from Typescript Component File';
  imgUrl: string = '../assets/images/demo.png'

  // Event Binding Button Click
  buttonClick() {
    console.log("Button Click Event Works!");
  }

  constructor() { 

  }

}
