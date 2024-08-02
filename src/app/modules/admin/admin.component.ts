import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeOption: string = 'dashboard'; 

  selectOption(option: string): void {
    this.activeOption = option;
  }
}
