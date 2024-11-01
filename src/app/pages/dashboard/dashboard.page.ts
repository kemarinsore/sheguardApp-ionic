import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  slides: Array<{ title: string; img: string }> = [
    { 
      title: 'Jadwal Scan Apar', 
      img: './assets/img/apar.png' 
    },
    { 
      title: 'Laporan Kesehatan', 
      img: './assets/img/Rectangle542.png' 
    },
    { 
      title: 'Persedian APD', 
      img: './assets/img/Rectangle543.png' 
    },
    { 
      title: 'Berita Terbaru', 
      img: './assets/img/Rectangle544.png' 
    }
  ];

  newsList: Array<{ title: string; img: string; date: string }> = [
    { 
      title: 'Kilang utama terbakar, 5 unit pemadam kebakaran di kerahka...', 
      img: '../assets/img/Rectangle538.png', 
      date: 'April 16 2023' 
    },
    { 
      title: 'Trafo di Cilacap Utara meledak tersambar petir', 
      img: '../assets/img/Rectangle539.png', 
      date: 'April 16 2023' 
    },
    { 
      title: 'Duar Duar Duar Duar Duar Duar Duar ', 
      img: '../assets/img/Rectangle540.png', 
      date: 'April 16 2023' 
    },
    { 
      title: 'Saya sebenernya 4 , yang 1 kabur yang 1 ga tau kemana yang 1 saya  ', 
      img: '../assets/img/Rectangle541.png', 
      date: 'April 16 2023' 
    }
  ];

  constructor() {
    addIcons({ compass, reader, warning, notifications, person });
  }

  swiperSlideChanged(e: any) {
    console.log('Slide changed:', e);
    // Jika Anda ingin menangani sesuatu berdasarkan slide aktif baru, Anda bisa mendapatkan index seperti ini:
    const currentIndex = e.realIndex;
    console.log('Current Index:', currentIndex);
  }

}
