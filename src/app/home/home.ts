import { Component, inject } from '@angular/core';
import { TrailLocation } from '../trail-location/trail-location';
import { TrailLocationInfo } from '../traillocation';
import { TrailService } from '../trail-service';

@Component({
  imports: [TrailLocation],
  selector: 'app-home',
  styleUrl: './home.css',
  template: `
    <section>
        <form>
            <input type="text" placeholder="Filter by city" />
            <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      @for (trailLocation of trailLocationList; track $index) {
        <app-trail-location [trailLocation]='trailLocation'/>
      }
    </section>
    `,
})
export class Home {
  trailLocationList: TrailLocationInfo[] = [];
  trailService: TrailService = inject(TrailService);
}
