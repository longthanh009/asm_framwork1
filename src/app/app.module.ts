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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
