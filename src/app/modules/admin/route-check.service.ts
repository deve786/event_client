import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteCheckService {

  constructor() { }

  isLoggedIn(){
    return !!sessionStorage.getItem('admin')
  }
}
