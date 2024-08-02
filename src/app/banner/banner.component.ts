import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  login:any=false

  ngOnInit(){
    if(sessionStorage.getItem("admin")){
      this.login=true
    }
    else{
      this.login=false
    }
  }
}
