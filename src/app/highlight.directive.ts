import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() color!: string;

  @HostListener('mouseenter') onMouseOver() {
    this.highlightElement(this.color)
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highlightElement('')
  }

  highlightElement(color: string) {
    this.el.nativeElement.style.background = color;
  }
}

