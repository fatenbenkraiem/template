import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminreserveComponent } from './components/admin/pages/adminreserve/adminreserve.component';
import { AdminuserComponent } from './components/admin/pages/adminuser/adminuser.component';
import { AdmintypeComponent } from './components/admin/pages/admintype/admintype.component';
import { AdminresComponent } from './components/admin/pages/adminres/adminres.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ResComponent } from './components/res/res.component';
import { TypeComponent } from './components/type/type.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: "", redirectTo: "res", pathMatch: "full" },
  { path: "type", component: TypeComponent },
  { path: "res", component: ResComponent },
    { path: "reserve", component: ReservationComponent },
  { path: "CONTACT", component: ContactComponent },
  /* Admin routes */
  { path: "admin/demandeur", component: AdminuserComponent    },
  { path: "admin/reserve", component: AdminreserveComponent   },
  { path: "admin/type", component: AdmintypeComponent  },
  { path: "admin/res", component: AdminresComponent  },
  { path: "admin/edit", component: ProfileComponent  },
  { path: "admin/login", component: LoginComponent   },
  { path: "**", redirectTo: "EEF", pathMatch: "full"   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
