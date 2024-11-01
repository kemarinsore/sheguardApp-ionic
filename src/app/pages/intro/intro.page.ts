import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit, OnDestroy {
  intervalId: any;          
  currentIndex: number = 0;  
  slides: any[] = [          
    { 
      title: 'Pemeriksaan Pekerja', 
      description: 'Tujuan dari pengecekan adalah untuk memastikan pekerja menjalankan SOP dengan benar demi keselamatan seluruh pekerja', 
      img: '../assets/img/variant1.png' 
    },
    { title: 'Pengecekan Alat', 
      description: 'Tujuan dari pengecekan alat adalah untuk memastikan alat dapat berjalan dengan optimal dan aman bagi pekerja', 
      img: '../assets/img/variant2.png' 
    },
    { title: 'Siap SOP', 
      description: 'Siap SOP pekerja telah mengikuti SOP yang tertera dan menjalankan Pengecekan Alat', 
      img: '../assets/img/variant3.png' 
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide(); 
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); 
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000); 
  }

  // Fungsi untuk berpindah ke slide tertentu
  goToSlide(index: number): void {
    this.currentIndex = index;
    clearInterval(this.intervalId); // Hentikan interval saat berpindah manual
    this.startAutoSlide(); // Mulai ulang auto-slide setelah berpindah
  }

  swiperSlideChanged(e: any) {
    console.log('Slide changed:', e);
  }
}
