import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs-detail',
  templateUrl: './blogs-detail.component.html',
  styleUrls: ['./blogs-detail.component.scss']
})
export class BlogsDetailComponent implements OnInit {
  blog! : IBlog
  id! : String
  constructor(private blogService : BlogService,
    private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")!;
    console.log(this.id);
    this.getBlog(this.id)
  }
  getBlog(id:String){
    this.blogService.get(id).subscribe(data =>{this.blog = data
    })
  }
}
