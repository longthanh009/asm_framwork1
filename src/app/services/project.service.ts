import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) {}
  created(project: any){
    return this.http.post("http://localhost:3001/api/projects",project)
  }
  getAll () :Observable<IProject[]>{
    return this.http.get<IProject[]>("http://localhost:3001/api/projects")
  }
  get(id:String):Observable<IProject>{
    return this.http.get<IProject>(`http://localhost:3001/api/projects/${id}`)
  }
  remove(id : String) :Observable<IProject>{
    return this.http.delete<IProject>(`http://localhost:3001/api/projects/${id}`)
  }
  update(project: any){
    return this.http.put(`http://localhost:3001/api/projects/${project._id}`,project)
  }
}
