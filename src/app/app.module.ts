import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './home/shops/shops.component';
import { CityComponent } from './home/city/city.component';
import { CategoryComponent } from './home/category/category.component';
import { AddshopsComponent } from './home/shops/addshops/addshops.component';
import { AddcategoryComponent } from './home/category/addcategory/addcategory.component';
import { AddcityComponent } from './home/city/addcity/addcity.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditShopsComponent } from './home/shops/edit-shops/edit-shops.component';
import { EditProPicComponent } from './home/shops/edit-pro-pic/edit-pro-pic.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './_interceptor/loadingInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ShopsComponent,
    CityComponent,
    CategoryComponent,
    AddshopsComponent,
    AddcategoryComponent,
    AddcityComponent,
    FooterComponent,
    LoginComponent,
    EditShopsComponent,
    EditProPicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
