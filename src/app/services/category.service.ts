import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) {}
  created(category: any){
    return this.http.post("http://localhost:3001/api/categorys",category)
  }
  getAll () :Observable<ICategory[]>{
    return this.http.get<ICategory[]>("http://localhost:3001/api/categorys")
  }
  get(id:String):Observable<ICategory>{
    return this.http.get<ICategory>(`http://localhost:3001/api/categorys/${id}`)
  }
  remove(id : String) :Observable<ICategory>{
    return this.http.delete<ICategory>(`http://localhost:3001/api/categorys/${id}`)
  }
  update(category: ICategory) :Observable<ICategory>{
    return this.http.put<ICategory>(`http://localhost:3001/api/categorys/${category._id}`,category)
  }
}
