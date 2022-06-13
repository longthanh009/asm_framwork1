import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProject } from 'src/app/models/project';
import { CategoryService } from 'src/app/services/category.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-creat-work',
  templateUrl: './creat-work.component.html',
  styleUrls: ['./creat-work.component.scss']
})
export class CreatWorkComponent implements OnInit {
  categorys!: ICategory[]
  project: IProject = {
    title: "",
    center: "",
    img: "",
    demo: "",
    category: "",
    description: ""
  }
  constructor(private router: ActivatedRoute,
    private categoryService: CategoryService,
    private projectService: ProjectService,
    private navigate: Router
  ) { }


  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id")!;
    this.getAllcategory();
    if (id) {
      this.projectService.get(id).subscribe(data => this.project = data)

    }

  }
  getAllcategory() {
    this.categoryService.getAll().subscribe(data => this.categorys = data);
  }
  onSubmit() {
    // console.log(this.project);

    const id = this.router.snapshot.paramMap.get("id");
    if (id) {
      return this.projectService.update(this.project).subscribe(() => {
        this.navigate.navigateByUrl("admin/projects")
      })
    }
    return this.projectService.created(this.project).subscribe(() => {
      this.navigate.navigateByUrl("admin/projects")
    })
  }
}
