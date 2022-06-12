import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'housings', component: HousingListComponent},
  {path: 'housing/:id', component: HousingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
