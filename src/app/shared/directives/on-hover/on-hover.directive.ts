import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective implements OnInit{

  @Input() color: string = 'red'
  currentColor!: string

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.currentColor = this.element.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseover')
  setOnColor(){
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.color)
  }

  @HostListener('mouseleave')
  setOffColor(){
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.currentColor)
  }

}
