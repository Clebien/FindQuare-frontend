import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HousingComponent } from './housing/housing.component';
import { HeaderComponent } from './header/header.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HousingComponent,
    HeaderComponent,
    HousingListComponent,
    LandingPageComponent,
    HousingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
