import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventServicesService } from 'src/app/eventServices/event-services.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css']
})
export class ManageEventComponent implements OnInit {
  eventData: any = [];
  isModalVisible: boolean = false;
  eventid: any = "";
  singleData: any = {};
  editEventForm: FormGroup;

  constructor(private es: EventServicesService, private ar: ActivatedRoute, private fb: FormBuilder, private toast:ToastService) { 
    this.editEventForm = this.fb.group({
      event_name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.es.getEvents().subscribe((result: any) => {
      this.eventData = result;
    });
  }

  openModal(id: any) {
    this.eventid = id;
    this.isModalVisible = true;
    this.es.getSingleEvents(id).subscribe((result: any) => {
      this.singleData = result;
      this.editEventForm.patchValue(this.singleData);
    });
  }

  editEvents() {
    if (this.editEventForm.valid) {
      this.es.editEvents(this.eventid, this.editEventForm.value).subscribe((result: any) => {
        this.fetchEvents();
        this.closeModal();
        this.toast.showSuccess("Successfully Updated")
      });
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }

  deleteEvents(eventId: any) {
    this.es.deleteEvents(eventId).subscribe((result) => {
      this.eventData = this.eventData.filter((event: any) => event.id !== eventId);
      this.toast.showSuccess("Deleted Successfully ")
    });
  }
}
