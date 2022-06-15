import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './components/website/hearder/hearder.component';
import { FooterComponent } from './components/website/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogItemComponent } from './components/website/blog-item/blog-item.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ProjectItemComponent } from './components/website/project-item/project-item.component';
import { BlogsDetailComponent } from './pages/blogs-detail/blogs-detail.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HearderAdminComponent } from './components/admin/hearder-admin/hearder-admin.component';
import { SideBarAdminComponent } from './components/admin/side-bar-admin/side-bar-admin.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { WebsiteComponent } from './components/layouts/website/website.component';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CreatBlogComponent } from './pages/creat-blog/creat-blog.component';
import { BlogManagerComponent } from './pages/blog-manager/blog-manager.component';
import { ProjectManagerComponent } from './pages/project-manager/project-manager.component';
import { CreatWorkComponent } from './pages/creat-work/creat-work.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import * as moment from 'moment';
import { CreatCategoryComponent } from './pages/creat-category/creat-category.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { CreatUserComponent } from './pages/creat-user/creat-user.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    BlogItemComponent,
    WorkPageComponent,
    ProjectItemComponent,
    BlogsDetailComponent,
    HearderAdminComponent,
    SideBarAdminComponent,
    WebsiteComponent,
    AdminComponent,
    CreatBlogComponent,
    BlogManagerComponent,
    ProjectManagerComponent,
    CreatWorkComponent,
    CategoryComponent,
    LoginComponent,
    CreatCategoryComponent,
    UserManagerComponent,
    CreatUserComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
  ],
  providers: [{ provide:"moment", useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
