import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServicesService } from 'src/app/eventServices/event-services.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

   constructor(private fb:FormBuilder,private es:EventServicesService, private rout:Router, private toast:ToastService ){}

   loginFormModel=this.fb.group({
    email:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]]
  })

  login(){
    console.log("asd");
    
    if(this.loginFormModel.value){
      var path=this.loginFormModel.value
      var email=path.email
      var passwd=path.password
      

      this.es.loginApi().subscribe((result:any)=>{
       
        var admin_email=result[0].email
        var admin_password=result[0].password
        console.log(admin_email);
        
        
        if(email===admin_email){
          console.log("email");
          
          if(passwd==admin_password){
            sessionStorage.setItem("admin",JSON.stringify(result[0]))
            this.toast.showSuccess("Login Sucessfully")
            this.rout.navigateByUrl ("admin/add-event")
          }else{
            this.toast.showWarning("Invalid credentials")
          }
        }
        else{
          this.toast.showWarning("Invalid Email address")
        }
        
      })
      
    }
  }

  ngOnInit(){
    
  }
}
