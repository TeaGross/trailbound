import { Component, input } from '@angular/core';
import { TrailLocationInfo } from '../traillocation';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
      <a [routerLink]="['/details', trailLocation().id]">Explore {{ trailLocation().name }}</a>
      
    </article>
  `,
})
export class TrailLocation {
  trailLocation = input.required<TrailLocationInfo>();


}
