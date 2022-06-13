import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { WebsiteComponent } from './components/layouts/website/website.component';
import { BlogManagerComponent } from './pages/blog-manager/blog-manager.component';
import { BlogsDetailComponent } from './pages/blogs-detail/blogs-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CategoryComponent } from './pages/category/category.component';
import { CreatBlogComponent } from './pages/creat-blog/creat-blog.component';
import { CreatCategoryComponent } from './pages/creat-category/creat-category.component';
import { CreatUserComponent } from './pages/creat-user/creat-user.component';
import { CreatWorkComponent } from './pages/creat-work/creat-work.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectManagerComponent } from './pages/project-manager/project-manager.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "", component: WebsiteComponent, children: [
      { path: "", component: HomeComponent },
      { path: "blogs", component: BlogsComponent },
      { path: "my-works", component: WorkPageComponent },
      { path: "my-works/:id", component: ProjectDetailComponent },

      { path: "blogs/:id", component: BlogsDetailComponent },
    ]
  },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: "", component: BlogManagerComponent },
      { path: "categorys", component: CategoryComponent },
      { path: "categorys/new", component: CreatCategoryComponent },
      { path: "categorys/:id/update", component: CreatCategoryComponent },

      { path: "blogs/new", component: CreatBlogComponent },
      { path: "blogs", component: BlogManagerComponent },
      { path: "blogs/:id/update", component: CreatBlogComponent },

      { path: "projects", component: ProjectManagerComponent },
      { path: "projects/new", component: CreatWorkComponent },
      { path: "projects/:id/update", component: CreatWorkComponent },
      
      { path: "users", component: UserManagerComponent },
      { path: "users/new", component: CreatUserComponent },
      { path: "users/:id/update", component: CreatWorkComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
