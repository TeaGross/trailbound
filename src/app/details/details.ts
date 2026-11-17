import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailService } from '../trail-service';
import { TrailLocation } from '../trail-location/trail-location';
import { TrailLocationInfo } from '../traillocation';

@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.css',
  template: `
    <article>
      <img
        class="trail-photo"
        [src]="trailLocation?.photo"
        alt="Photo of {{ trailLocation?.name }}"
        crossorigin
      />
      <section class="trail-description">
        <h2 class="trail-heading">{{ trailLocation?.name }}</h2>
        <p class="trail-location">{{ trailLocation?.location }}, {{ trailLocation?.country }}</p>
      </section>
      <section class="trail-features">
        <h2 class="section-heading">About this trail</h2>
        <ul>
          <li>Difficulty: {{ trailLocation?.difficulty }}</li>
          <li>Distance: {{ trailLocation?.distance }}km</li>
          <li>Duration: {{ trailLocation?.duration }}</li>
        </ul>
      </section>
    </article>
  `,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  trailService = inject(TrailService);
  trailLocation: TrailLocationInfo | undefined;

  constructor() {
    const trailLocationId = Number(this.route.snapshot.params['id']);
    this.trailLocation = this.trailService.getTrailLocationById(trailLocationId);
  }
}
