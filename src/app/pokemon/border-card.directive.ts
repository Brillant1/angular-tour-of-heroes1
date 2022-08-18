import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  @Input('pkmnBorderCard') borderColor: string;
  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}`;
  }
  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

}
