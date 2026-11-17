import { Component, input } from '@angular/core';
import { TrailLocationInfo } from '../traillocation';

@Component({
  imports: [],
  selector: 'app-trail-location',
  styleUrl: './trail-location.css',
  template: `
    <article class="trail-card">
      <img
        class="trail-photo"
        [src]="trailLocation().photo"
        alt="Exterior photo of {{ trailLocation().name }}"
        crossorigin
      />
      <h2 class="trail-heading">{{ trailLocation().name }}</h2>
      <p class="trail-location">{{ trailLocation().location }}, {{ trailLocation().country }}</p>
    </article>
  `,
})
export class TrailLocation {
  trailLocation = input.required<TrailLocationInfo>();


}
