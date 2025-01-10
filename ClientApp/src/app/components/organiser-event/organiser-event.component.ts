import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Location {
  id: number;
  name: string;
}


@Component({
  selector: 'app-organiser-event',
  templateUrl: './organiser-event.component.html',
  styleUrls: ['./organiser-event.component.scss']
})


export class OrganiserEventComponent {

  eventForm: FormGroup;

  locations: Location[] = [

    { id: 1, name: 'Main Auditorium' },

    { id: 2, name: 'Conference Hall A' },

    { id: 3, name: 'Outdoor Plaza' },

    // Add more locations as needed

  ];

  timeSlots: string[] = [

    '9:00 AM - 10:00 AM',

    '10:00 AM - 11:00 AM',

    '11:00 AM - 12:00 PM',

    '1:00 PM - 2:00 PM',

    '2:00 PM - 3:00 PM',

    // Add more time slots

  ];

  imageUrl = 'https://via.placeholder.com/800x400'; // Placeholder image URL

  constructor(private fb: FormBuilder) {

    this.eventForm = this.fb.group({

      name: ['', Validators.required],

      startDate: ['', Validators.required],

      startTime: ['', Validators.required],

      endDate: ['', Validators.required],

      endTime: ['', Validators.required],

      location: ['', Validators.required],

      timeSlot: ['', Validators.required],

      isFree: [true], // Default to free tickets

      ticketPrice: [{ value: 0, disabled: true }, Validators.required], // Initially disabled

      description: ['']

    });

    this.eventForm.get('isFree')?.valueChanges.subscribe(isFree => {

      const ticketPriceControl = this.eventForm.get('ticketPrice');

      if (isFree) {

        ticketPriceControl?.disable();

        ticketPriceControl?.setValue(0);

      } else {

        ticketPriceControl?.enable();

      }

    });

  }

  onSubmit() {

    if (this.eventForm.valid) {

      console.log(this.eventForm.value);

      // Here you would typically send the form data to your backend service

    }

  }

}
