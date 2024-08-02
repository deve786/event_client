import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../modules/admin/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  
  constructor(private rout:Router, private toast:ToastService){}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  clickOption() {
    this.isMenuOpen = false
  }

  scroll() {
    this.isMenuOpen = false
    const element = document.getElementById('event');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  logout(){
    if(sessionStorage.getItem('admin')){
      sessionStorage.removeItem('admin')
      this.rout.navigateByUrl("admin/admin-login")
      this.toast.showSuccess("Logout Successfully")
    }
    
  }
}
