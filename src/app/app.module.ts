import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TypeComponent } from './components/type/type.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ResComponent } from './components/res/res.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminfooterComponent } from './components/admin/layout/adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './components/admin/layout/adminsidebar/adminsidebar.component';
import { AdminheaderComponent } from './components/admin/layout/adminheader/adminheader.component';
import { AdminreserveComponent } from './components/admin/pages/adminreserve/adminreserve.component';
import { AdminuserComponent } from './components/admin/pages/adminuser/adminuser.component';
import { AdmintypeComponent } from './components/admin/pages/admintype/admintype.component';
import { AdminresComponent } from './components/admin/pages/adminres/adminres.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './services/auth-guard.service';
import { HttpInterceptors } from './services/http-interceptors.service';
import { TypeService } from './services/type.service';
import { ContactService } from './services/contact.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    TypeComponent,
    ReservationComponent,
    ResComponent,
    LoginComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    AdminreserveComponent,
    AdminuserComponent,
    AdmintypeComponent,
    AdminresComponent,
    ProfileComponent,
    TestComponent
  
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
   // ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
