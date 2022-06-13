import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hearder-admin',
  templateUrl: './hearder-admin.component.html',
  styleUrls: ['./hearder-admin.component.scss']
})
export class HearderAdminComponent implements OnInit {

  constructor(private navigate : Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("user");
    this.navigate.navigateByUrl("/")
  }
}
