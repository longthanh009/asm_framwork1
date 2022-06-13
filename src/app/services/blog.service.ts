import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http : HttpClient) {}
  created(blog: any){
    return this.http.post("http://localhost:3001/api/blogs",blog)
  }
  getAll () :Observable<IBlog[]>{
    return this.http.get<IBlog[]>("http://localhost:3001/api/blogs")
  }
  get(id:String)  :Observable<IBlog>{
    return this.http.get<IBlog>(`http://localhost:3001/api/blogs/${id}`)
  }
  remove(id : String):Observable<IBlog>{
    return this.http.delete<IBlog>(`http://localhost:3001/api/blogs/${id}`)
  }
  update(blog: IBlog):Observable<IBlog>{
    return this.http.put<IBlog>(`http://localhost:3001/api/blogs/${blog._id}`,blog)
  }
}
