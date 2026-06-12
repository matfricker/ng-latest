
import { Component } from '@angular/core';

@Component({
    selector: 'app-control-flow',
    imports: [],
    templateUrl: './control-flow.component.html',
    styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  value: number = 15;

  ngOnInit() {
    this.log(this.value.toString());
    this.getLocation();
  }

  changeValue(num: number): void {
    this.value = num;
    this.log(this.value.toString());
  }

  log(message: string): void {
    console.log(`Log: ${message}`);
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }, (error) => {
        console.error('Message: ' + error.message);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
