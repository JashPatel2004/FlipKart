import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mainCarouselData } from '../../../../../../Data/MainCarouselData';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  carouselData:any;
  currentSlide=0;
  interval:any; 

  ngOnInit(): void {
    this.carouselData = mainCarouselData;
    // this.autoPlay();
  }
  
  autoPlay() {
    try {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // Adjust the interval (in milliseconds) as needed
    } catch (error) {
      console.error("Error in autoPlay method:", error);
    }
  }
  
  nextSlide() {
    try {
      this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
    } catch (error) {
      console.error("Error in nextSlide method:", error);
    }
  }
  

}
