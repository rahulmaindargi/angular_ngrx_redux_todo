import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path:"",redirectTo: "home", pathMatch: "full"},
  {path:"home",component:HomeComponent, children: [{path:"userDetails/:id", component:UserdetailsComponent, outlet: "userData"}]},
  {path:"about",component:AboutComponent},
  //{path:"userDetails",component:UserdetailsComponent},
 // {path:"userDetails",component:UserdetailsComponent, outlet: "userData"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
