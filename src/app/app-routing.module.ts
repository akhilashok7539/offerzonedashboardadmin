import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './home/shops/shops.component';
import { CityComponent } from './home/city/city.component';
import { CategoryComponent } from './home/category/category.component';
import { LoginComponent } from './login/login.component';
import { AddcityComponent } from './home/city/addcity/addcity.component';
import { AddcategoryComponent } from './home/category/addcategory/addcategory.component';
import { AddshopsComponent } from './home/shops/addshops/addshops.component';
import { EditShopsComponent } from './home/shops/edit-shops/edit-shops.component';
import { EditProPicComponent } from './home/shops/edit-pro-pic/edit-pro-pic.component';


const routes: Routes = [
  { path:'', redirectTo: '/Login', pathMatch: 'full' },
  { path:'Login', component: LoginComponent },
  { path:'Home', component: HomeComponent },
  { path:'shop', component: ShopsComponent },
  { path:'city', component: CityComponent },
  { path:'category', component: CategoryComponent },
  { path:'add-city', component: AddcityComponent },
  { path:'add-category', component: AddcategoryComponent },
  { path:'add-shop', component: AddshopsComponent },
  { path:'edit-shop', component: EditShopsComponent },
  { path:'edit-pro-pic', component: EditProPicComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
