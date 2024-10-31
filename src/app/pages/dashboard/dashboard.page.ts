import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

  constructor() {
    addIcons({ compass, reader, warning, notifications, person });
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

}
