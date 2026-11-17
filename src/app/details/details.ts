import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailService } from '../trail-service';
import { TrailLocationInfo } from '../traillocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
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
      <section class="trail-inquiry">
        <h2 class="section-heading">Learn more about this trail</h2>
        <form [formGroup]="trailInquiryForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Send inquiry</button>
        </form>
      </section>
    </article>
  `,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  trailService = inject(TrailService);
  trailLocation: TrailLocationInfo | undefined;
  
  // TODO: add validation
  trailInquiryForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const trailLocationId = Number(this.route.snapshot.params['id']);
    this.trailLocation = this.trailService.getTrailLocationById(trailLocationId);
  }

  submitApplication() {
    this.trailService.submitApplication(
      this.trailInquiryForm.value.firstName ?? '',
      this.trailInquiryForm.value.lastName ?? '',
      this.trailInquiryForm.value.email ?? '',
      this.trailLocation?.name ?? '',
    );
  }
}
