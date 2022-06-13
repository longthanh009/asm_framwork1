import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-creat-category',
  templateUrl: './creat-category.component.html',
  styleUrls: ['./creat-category.component.scss']
})
export class CreatCategoryComponent implements OnInit {
  category : ICategory ={
    name:""
  }
  constructor(private router : ActivatedRoute,
    private categoryService : CategoryService,
    private navigate : Router
    ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    if (id) {
      this.categoryService.get(id).subscribe(data => {
        console.log(data);
        
        this.category = data
      })
    }
  }
  onSubmit() {
    const id = this.router.snapshot.paramMap.get("id");
    if (id) {
      return this.categoryService.update(this.category).subscribe(() => {
        this.navigate.navigateByUrl("admin/categorys")
      })
    }
    return this.categoryService.created(this.category).subscribe(() => {
      this.navigate.navigateByUrl("admin/categorys")
    })
  }
}
