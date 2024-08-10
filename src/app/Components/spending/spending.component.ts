import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent {
  faces = Array.from({ length: 20 }, (_, i) => i); // Array to iterate over face indices
constructor(private router:Router){}
  ngOnInit() {}

  ngAfterViewInit() {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const barrel = document.querySelector('.cylinder') as HTMLElement;
    const barrelDimensions = barrel.getBoundingClientRect();

    const positionElement = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;   
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    
    window.addEventListener('mousemove', positionElement);

    document.addEventListener('mousemove', (e: MouseEvent) => this.animateBarrel(e, barrel, barrelDimensions));
  }

  animateBarrel(e: MouseEvent, barrel: HTMLElement, barrelDimensions: DOMRect) {
    const cursor = {
      x: e.clientX - Math.round(barrelDimensions.left),
      y: e.clientY - Math.round(barrelDimensions.top)
    };
    const angle = {
      y: 30 * ((cursor.y / barrelDimensions.height) * 2 - 1),
      x: 30 * ((cursor.x / barrelDimensions.width) * 2 - 1)
    };
    barrel.style.transform = `rotateX(${-angle.y}deg) rotateY(${angle.x}deg)`;
  }

  previous() {
    this.router.navigate(['./user-dashboard']);
  }
}
