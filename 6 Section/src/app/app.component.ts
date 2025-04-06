import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerstatusComponent } from './dashboardItem/serverstatus/serverstatus.component';
import { TrafficStatusComponent } from './dashboardItem/traffic-status/traffic-status.component';
import { SupportTicketComponent } from './dashboardItem/support-ticket/support-ticket.component';
import { WrapperComponent } from './dashboardItem/wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerstatusComponent,
    TrafficStatusComponent,
    SupportTicketComponent,
    WrapperComponent,
  ],
})
export class AppComponent {}
