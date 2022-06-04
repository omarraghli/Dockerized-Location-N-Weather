import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  WeatherData: any;
  constructor() {}

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    if ('geolocation' in navigator) {
      // supported
      const successCallback = (position: {
        coords: { latitude: any; longitude: any };
      }) => {
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=' +
            position.coords.latitude +
            '&lon=' +
            position.coords.longitude +
            '&appid=ff1bc4683fc7325e9c57e586c20cc03e'
        )
          .then((response) => response.json())
          .then((data) => {
            this.setWeatherData(data);
          });
      };

      navigator.geolocation.getCurrentPosition(successCallback);
    } else {
      // not supported
      console.log('geolocation not supported');
    }
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
}
