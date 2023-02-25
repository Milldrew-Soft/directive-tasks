import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @Input('highlight') highlightColor: string | undefined;
  constructor(private elementRef: ElementRef) {}
  ngOnChanges() {
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
