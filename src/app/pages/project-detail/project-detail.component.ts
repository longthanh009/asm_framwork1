import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project! : IProject
  id! : String
  constructor(private projectService : ProjectService,
    private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")!;
    console.log(this.id);
    this.getBlog(this.id)
  }
  getBlog(id:String){
    this.projectService.get(id).subscribe(data =>{this.project = data
    })
  }
}
