import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AdminComponent,
    AddEventComponent,
    ManageEventComponent,
    SidebarComponent,
    AdminLoginComponent,
    ModalComponent,
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
