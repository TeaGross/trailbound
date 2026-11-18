import { Component, inject } from '@angular/core';
import { TrailLocation } from '../trail-location/trail-location';
import { TrailLocationInfo } from '../traillocation';
import { TrailService } from '../trail-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [TrailLocation, ReactiveFormsModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  template: `
    <section>
        <form (ngSubmit)="filterResults(filter.value)">
            <input type="text" placeholder="Filter by country or trail name" #filter />
            <button class="primary" type="submit">Search</button>
        </form>
    </section>
    <section class="results">
      @if (filteredTrailList.length > 0) {
        @for (trailLocation of filteredTrailList; track $index) {
          <app-trail-location [trailLocation]='trailLocation'/>
        }
      } @else {
      <p>No trails found. Try another search.</p>
      }
    </section>
    `,
})
export class Home {
  trailLocationList: TrailLocationInfo[] = [];
  trailService: TrailService = inject(TrailService);
  filteredTrailList: TrailLocationInfo[] = [];
  

  constructor() {
    this.trailLocationList = this.trailService.getAllTrailLocations();
    this.filteredTrailList = this.trailLocationList;
  }

  filterResults(text:string) {
    if(!text) {
      this.filteredTrailList = this.trailLocationList;
      return;
    }

    this.filteredTrailList = this.trailLocationList.filter((trailLocation) => 
      trailLocation?.country.toLowerCase().includes(text.toLowerCase()) || trailLocation?.name.toLowerCase().includes(text.toLowerCase()),
  );

  console.log(this.filteredTrailList);
  }
}
