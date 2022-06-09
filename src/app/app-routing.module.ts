import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { WebsiteComponent } from './components/layouts/website/website.component';
import { BlogsDetailComponent } from './pages/blogs-detail/blogs-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';

const routes: Routes = [
  {path:"",component : WebsiteComponent, children :[
    {path:"", component :HomeComponent},
    {path:"blogs",component : BlogsComponent},
    {path:"my-works",component : WorkPageComponent},
    {path:"blogs/:id",component : BlogsDetailComponent},
  ]},
  {path:"admin",component : AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
