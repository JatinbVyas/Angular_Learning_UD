import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css',
})
export class ServerstatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setTimeout(() => {
      const randm = Math.random();
      if (randm > 0.5) {
        this.currentStatus = 'online';
      } else if (randm < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
