import { Component } from '@angular/core';
import { EventServicesService } from '../eventServices/event-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  eventData:any=[]
  searchData:any=""

  constructor(private es:EventServicesService){}

  ngOnInit(){
    this.fetchEvents()
  }

  fetchEvents(){
    this.es.getEvents().subscribe((result:any)=>{
      console.log(result);
      this.eventData=result
    })
  }

}
