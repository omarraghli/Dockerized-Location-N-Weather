import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css'],
})
export class LocalisationComponent implements OnInit {
  user_latitude!: number;
  user_longitude!: number;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [35.759465, -5.833954];

  //[35.759465, -5.833954] // latitude,longitude

  private async initMap() {
    if ('geolocation' in navigator) {
      // supported
      const successCallback = (position: {
        coords: { latitude: any; longitude: any };
      }) => {
        console.log('latitude', position.coords.latitude); // 43.2132209
        console.log('longitude', position.coords.longitude); // 27.9571503
        this.user_latitude = position.coords.latitude;
        this.user_longitude = position.coords.longitude;

        this.map = L.map('map', {
          center: this.centroid,
          zoom: 12,
        });

        const tiles = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            minZoom: 10,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }
        );
        const marker = L.marker([this.user_latitude, this.user_longitude]);
        marker.addTo(this.map);
        tiles.addTo(this.map);

        this.map.panTo(new L.LatLng(this.user_latitude, this.user_longitude));
      };

      navigator.geolocation.getCurrentPosition(successCallback);
    } else {
      // not supported
      console.log('geolocation not supported');
    }
  }

  constructor() {}

  ngOnInit() {
    this.initMap();
  }

}
