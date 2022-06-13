import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorys!:ICategory[]
  constructor(private categotyService:CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  removeCate(_id: String) {
    let resutl = confirm("Bạn có muốn xoá item ?")
    if (resutl) {
      this.categotyService.remove(_id).subscribe(data => {
        alert("Xoá thành công");
        this.categorys = this.categorys.filter(item => item._id != _id)
      })
    }
  }
  getAll (){
    this.categotyService.getAll().subscribe(data => this.categorys=data)
  }
}
