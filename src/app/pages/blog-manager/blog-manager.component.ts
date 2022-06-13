import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.scss']
})
export class BlogManagerComponent implements OnInit {
  blogs!: IBlog[]
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getAll();
  }
  removeBlog(_id: String) {
    let resutl = confirm("Bạn có muốn xoá item ?")
    if (resutl) {
      this.blogService.remove(_id).subscribe(data => {
        alert("Xoá thành công");
        this.blogs = this.blogs.filter(item => item._id != _id)
      })
    }
  }
  getAll() {
    this.blogService.getAll().subscribe(data => {
      this.blogs = data
    })
  }
}
