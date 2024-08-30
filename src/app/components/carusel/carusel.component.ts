import { Component, input, Input, OnInit } from '@angular/core';
import { Interaction } from 'chart.js';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit {
  @Input() images: caruselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() sliderInterval = 3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }


  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.sliderInterval);
  }


  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

}


export interface caruselImage {
  imageSrc: string;
  imageAlt: string;
}