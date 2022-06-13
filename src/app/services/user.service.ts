import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {}
  login(user: IUser):Observable<IUser>{
    return this.http.post<IUser>("http://localhost:3001/api/login",user)
  }
  getAll():Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:3001/api/users")
  }
  remove(_id : String):Observable<IUser>{
    return this.http.delete<IUser>(`http://localhost:3001/api/users/${_id}`)
  }
  register(user: IUser):Observable<IUser>{
    return this.http.post<IUser>(`http://localhost:3001/api/register`,user)
  }
}