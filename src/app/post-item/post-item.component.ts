import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  // To retrieve the post item from post component input 
  @Input() post_item: string = '';

  constructor() { }

  ngOnInit(): void {
      
  }
}
