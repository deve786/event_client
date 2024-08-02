import { Component } from '@angular/core';
import { EventServicesService } from '../eventServices/event-services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  eventId:any=""
  singleData:any=[]
  constructor(private ar: ActivatedRoute, private es:EventServicesService) { }

  ngOnInit(){
    this.ar.params.subscribe((result)=>{
      console.log(result);
      this.eventId=result['id']
      console.log(this.eventId);
      
    })
    this.es.getSingleEvents(this.eventId).subscribe((result:any)=>{
      console.log(result);
      this.singleData=result
    })
  }
}
