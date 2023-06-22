import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { AppService } from './app-service.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {Routes,RouterModule} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  
  {path:'**',component:NotfoundComponent} //default , NEVER PLACE FIRST ,ALWAYS LAST IN PATHS OBJECTS

 ];
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

 

     

      
