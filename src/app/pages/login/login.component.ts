import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : {email:String,password: String}={
    email:"",
    password:""
  }
  constructor(private userService : UserService,
    private navigate: Router
    ) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.login(this.user).subscribe(async data =>{
      await localStorage.setItem("user",JSON.stringify(data));
      this.navigate.navigateByUrl("/admin")
    })
    
  }
}
