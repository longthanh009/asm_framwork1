import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent implements OnInit {
  user : IUser = {
    name : "",
    email: "",
    password: "",
    role: 0,
  }
  constructor(private userService : UserService,
    private router : ActivatedRoute,
    private navigate : Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    return this.userService.register(this.user).subscribe(() => {
      this.navigate.navigateByUrl("admin/users")
    })
  }
}
