import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog! : IBlog
  constructor() { }
  
  ngOnInit(): void {
  }

}
