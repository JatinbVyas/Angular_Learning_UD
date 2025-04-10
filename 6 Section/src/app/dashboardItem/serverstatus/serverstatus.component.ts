import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css',
})
export class ServerstatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  ngOnInit() {
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
