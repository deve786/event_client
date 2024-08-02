import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManageContactComponent } from 'src/app/manage-contact/manage-contact.component';
import { authGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { path: '',canActivate:[authGuard], component: AdminComponent },
  { path: 'add-event',canActivate:[authGuard], component: AddEventComponent },
  { path: 'manage-event',canActivate:[authGuard], component: ManageEventComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'manage-message',canActivate:[authGuard], component: ManageContactComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
