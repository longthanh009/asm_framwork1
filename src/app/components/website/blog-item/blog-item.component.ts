import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  moment = moment();
  @Input() blog! : IBlog
  constructor() { }
  
  ngOnInit(): void {
  }

}
