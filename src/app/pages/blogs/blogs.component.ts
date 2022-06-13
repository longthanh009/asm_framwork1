import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs! : IBlog[]
  constructor(private blogService : BlogService) { }
  getAll(){
    this.blogService.getAll().subscribe(data =>this.blogs=data)
  }
  ngOnInit(): void {    
    this.getAll();
  }

}
