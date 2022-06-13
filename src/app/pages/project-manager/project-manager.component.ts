import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {
  projects! : IProject[]
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getAll()
  }
  removeProject(_id: String) {
    let resutl = confirm("Bạn có muốn xoá item ?")
    if (resutl) {
      this.projectService.remove(_id).subscribe(data => {
        alert("Xoá thành công");
        this.projects = this.projects.filter(item => item._id != _id)
      })
    }
  }
  getAll(){
    this.projectService.getAll().subscribe(data =>{
      this.projects=data
    })
  }
}
