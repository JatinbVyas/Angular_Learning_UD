import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css',
})
export class ServerstatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(
        'From ServerStatusComponent constructor ::',
        this.currentStatus()
      );
    });
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      const randm = Math.random();
      if (randm > 0.5) {
        this.currentStatus.set('online');
      } else if (randm < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
