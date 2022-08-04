import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { Navb } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { SearchforpatientComponent } from './searchforpatient/searchforpatient.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NotfoundComponent,
    AddpatientComponent,
    SearchforpatientComponent,
    ForgetPasswordComponent,
    FooterComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
