import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerstatusComponent } from './dashboardItem/serverstatus/serverstatus.component';
import { TrafficStatusComponent } from './dashboardItem/traffic-status/traffic-status.component';
import { SupportTicketComponent } from './dashboardItem/support-ticket/support-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerstatusComponent,
    TrafficStatusComponent,
    SupportTicketComponent,
  ],
})
export class AppComponent {}
