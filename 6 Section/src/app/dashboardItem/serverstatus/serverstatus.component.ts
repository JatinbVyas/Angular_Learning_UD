import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css',
})
export class ServerstatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    const intervalId = setInterval(() => {
      const randm = Math.random();
      if (randm > 0.5) {
        this.currentStatus = 'online';
      } else if (randm < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }

      this.destroyRef.onDestroy(() => {
        clearInterval(intervalId);
      });
    }, 5000);
  }
  // ngOnDestroy() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
}
