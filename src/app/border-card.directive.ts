import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true,
})
export class BorderCardDirective {
  private initialColor: string = 'white'; // On startup
  private defaultColor: string = 'black'; // If no color found
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setColor(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
