import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventServicesService } from 'src/app/eventServices/event-services.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(private fb: FormBuilder,private es:EventServicesService, private toast:ToastService) { }

  addForm = this.fb.group({
    event_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    description: ['', [Validators.required]],
    location: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    image: ['', [Validators.required]],
  })

  addEvent(){
    console.log("asdasd");
    if(this.addForm.value){ 
      
      
      var path=this.addForm.value
      this.es.addEvents({event_name:path.event_name,description:path.description,location:path.location,date:path.date,time:path.time,image:path.image}).subscribe((result:any)=>{
        console.log(result);
        this.addForm.reset()
        this.toast.showSuccess("Successfully Added")
        
      })

    }
    else{
      alert("Invalid Form")
    }
  }
}
