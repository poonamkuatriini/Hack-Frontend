import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent {
  
  volunteers= [
    {
      id: 1,
      name: 'Mark Otto',
      email: 'mark.otto@email.com',
      phone: '(555) 123-4567',
      college: 'University of Technology',
      status: 'active',
      selected: false
    },
    {
      id: 2,
      name: 'Jacob Thornton',
      email: 'jacob.t@email.com',
      phone: '(555) 234-5678',
      college: 'State College',
      status: 'active',
      selected: false
    },
    {
      id: 3,
      name: 'Larry Bird',
      email: 'larry.bird@email.com',
      phone: '(555) 345-6789',
      college: 'City University',
      status: 'inactive',
      selected: false
    }
  ];

  selectAll: boolean = false;

  get hasSelectedVolunteers(): boolean {
    return this.volunteers.some(v => v.selected);
  }

  toggleAll() {
    this.volunteers.forEach(volunteer => {
      volunteer.selected = this.selectAll;
    });
  }

  updateSelectAll() {
    this.selectAll = this.volunteers.every(v => v.selected);
  }

  submitSelected() {
    const selectedVolunteers = this.volunteers.filter(v => v.selected);
    console.log('Selected volunteers:', selectedVolunteers);
    // Here you can add your submit logic, like making an API call
    alert(`Selected ${selectedVolunteers.length} volunteers`);
  }
}
