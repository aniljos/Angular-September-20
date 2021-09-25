import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight: string ="";
  @Input() public defaultColor: string ="";

  constructor(private element: ElementRef) { 

    //element.nativeElement.style.background = "yellow";
  }

  @HostListener("mouseenter")
  mouseEnter(){
    this.element.nativeElement.style.background = this.appHighlight || "yellow";
  }

  @HostListener("mouseleave")
  mouseLeave(){
    this.element.nativeElement.style.background = this.defaultColor || "";
  }

}
