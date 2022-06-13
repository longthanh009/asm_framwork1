import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-creat-blog',
  templateUrl: './creat-blog.component.html',
  styleUrls: ['./creat-blog.component.scss']
})
export class CreatBlogComponent implements OnInit {
  blog: IBlog = {
    title: "",
    center: "",
    img: "",
    description: ""
  }
  constructor(private router: ActivatedRoute,
    private blogService: BlogService,
    private navigate: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    if (id) {
      this.blogService.get(id).subscribe(data => this.blog = data)
    }
  }
  onSubmit() {
    const id = this.router.snapshot.paramMap.get("id");
    if (id) {
      return this.blogService.update(this.blog).subscribe(() => {
        this.navigate.navigateByUrl("admin/blogs")
      })
    }
    return this.blogService.created(this.blog).subscribe(() => {
      this.navigate.navigateByUrl("admin/blogs")
    })
  }
}
