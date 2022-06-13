import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  users! : IUser[];
  constructor(private navigate : Router,
      private userService : UserService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }
  removeUser(_id: String) {
    let resutl = confirm("Bạn có muốn xoá item ?")
    if (resutl) {
      this.userService.remove(_id).subscribe(data => {
        alert("Xoá thành công");
        this.users = this.users.filter(item => item._id != _id)
      })
    }
  }
  getAll (){
    this.userService.getAll().subscribe(data => this.users=data)
  }
}
