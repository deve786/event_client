import { Component } from '@angular/core';
import { EventServicesService } from '../eventServices/event-services.service';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})
export class ManageContactComponent {

  messageList:any=[]

  constructor(private es: EventServicesService) {}

  ngOnInit(){
    this.fetchMessage()
  }

  fetchMessage() {
    this.es.getMessage().subscribe((result: any) => {
      this.messageList = result;
      console.log(this.messageList);
      
    });
  }
}
