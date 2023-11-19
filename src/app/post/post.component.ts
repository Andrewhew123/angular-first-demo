import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // To retrieve the post from app component input 
  @Input() fromParent: string = '';
  
  // Display from post(parent) to post-item(child) component
  postItem: string = "This is the post item";

  // Display from post(child) to app(parent) component
  childMessage: string = 'From Child Component';

  // To display the output from post(child) to app(parent) component
  outputChildMessage: string = 'Message from Child Component Via Output';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
 
  ngOnInit(): void {
      
  }

  // Click the button to display the message
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

}
