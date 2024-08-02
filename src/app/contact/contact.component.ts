import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventServicesService } from '../eventServices/event-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private fb: FormBuilder, private es: EventServicesService) { }


  addForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    message: ['', [Validators.required]],

  })

  addMessage() {
    if (this.addForm.valid) {
      var path = this.addForm.value
      console.log(path);

      this.es.sendMessage({ name: path.name, email: path.email, message: path.message }).subscribe((result: any) => {
        console.log(result);
        this.addForm.reset()
        alert("Add Successfully....")
      })
    }
    else {
      alert("Invalid Form")
    }
  }
}
