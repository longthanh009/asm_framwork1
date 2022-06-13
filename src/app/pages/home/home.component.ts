import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';
import { IProject } from 'src/app/models/project';
import { BlogService } from 'src/app/services/blog.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects! :IProject[]
  blogs! : IBlog[]
  constructor(private projectService : ProjectService,
    private blogService : BlogService) { 
  }
  ngOnInit(): void {
    this.getAllProject();
    this.getAllBlogs();
  }
  getAllProject(){
    this.projectService.getAll().subscribe(data => this.projects=data)
  }
  getAllBlogs(){
    this.blogService.getAll().subscribe(data => this.blogs=data)
  }
}
