import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {
  projects! :IProject[]
  constructor(private projectService : ProjectService) { 
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.projectService.getAll().subscribe(data => this.projects=data)
  }
}
