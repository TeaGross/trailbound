import { Component } from '@angular/core';
import { TrailLocation } from '../trail-location/trail-location';
import { TrailLocationInfo } from '../traillocation';

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
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  trailLocationList: TrailLocationInfo[] = [
    {
      id: 1,
      name: 'PR1 – Vereda do Areeiro',
      location: 'Madeira',
      country: 'Portugal',
      photo: 'public/vereda-do-pico-ruivo.jpg',
      distance: 11,
      difficulty: 'beginner',
      duration: '5h',
      elevationGain: 200,
    },
    {
      id: 2,
      name: 'Inca Trail to Machu Picchu',
      location: 'Cusco',
      country: 'Peru',
      photo: 'public/machu-pichu.jpg',
      distance: 42,
      difficulty: 'moderate',
      duration: '4–5 days',
      elevationGain: 1200,
    },
    {
      id: 3,
      name: 'Everest Base Camp Trek',
      location: 'Khumbu Valley',
      country: 'Nepal',
      photo: 'public/everest-base-camp-trek.jpeg',
      distance: 130,
      difficulty: 'hard',
      duration: '12–14 days',
      elevationGain: 4000,
    },
    {
      id: 4,
      name: 'Tour du Mont Blanc',
      location: 'Chamonix',
      country: 'France',
      photo: 'public/tour-du-mont-blanc.jpg',
      distance: 170,
      difficulty: 'hard',
      duration: '10–12 days',
      elevationGain: 10000,
    },
    {
      id: 5,
      name: 'Kungsleden',
      location: 'Abisko',
      country: 'Sweden',
      photo: 'public/kungsleden.jpg',
      distance: 107,
      difficulty: 'moderate',
      duration: '5–7 days',
      elevationGain: null,
    },
    {
      id: 6,
      name: 'Laugavegur Trail',
      location: 'Landmannalaugar',
      country: 'Iceland',
      photo: 'public/laugavegur-trail.webp',
      distance: 55,
      difficulty: 'moderate',
      duration: '3–4 days',
      elevationGain: null,
    },
    {
      id: 7,
      name: 'Grand Canyon Rim-to-Rim',
      location: 'Grand Canyon, Arizona',
      country: 'USA',
      photo: 'public/grand-canyon.webp',
      distance: 34,
      difficulty: 'hard',
      duration: '1–2 days',
      elevationGain: null,
    },
    {
      id: 8,
      name: 'Routeburn Track',
      location: 'South Island',
      country: 'New Zealand',
      photo: 'public/routeburn-track.jpg',
      distance: 33,
      difficulty: 'moderate',
      duration: '3–4 days',
      elevationGain: null,
    },
    {
      id: 9,
      name: 'West Highland Way',
      location: 'Scottish Highlands',
      country: 'United Kingdom',
      photo: 'public/west-highland-way.webp',
      distance: 155,
      difficulty: 'moderate',
      duration: '5–8 days',
      elevationGain: null,
    },
  ];
}
