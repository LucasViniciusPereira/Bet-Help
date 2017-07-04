import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';
declare var $: any;

// @Directive({
//   selector: '[floatlabel]'
// })
@Directive({
  selector: `[appFloatLabel]`
})
export class FloatlabelDirective implements OnInit {

  @HostListener('focus') onfocus() {
    console.log('focus');
    this.floatLabel();
  }

  @HostListener('blur') onblur() {
    console.log('blur');
    this.floatLabel();
  }

  @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
    return window.confirm('Are you sure you want to do this?');
  }

  floatLabel() {
    const hasFocus = $(this.el.nativeElement).is(':focus');
    const parent = $(this.el.nativeElement).closest('.form-group-label');
    parent.removeClass('control-highlight');
    parent.removeClass('control-focus');

    if (parent) {
      if (this.el.nativeElement.value) {
        parent.addClass('control-highlight');
      }
      if (hasFocus) {
        parent.addClass('control-focus');
      }
    }
  };

  constructor(
    private el: ElementRef
  ) {
    console.log('asd');
  }

  ngOnInit() {
    this.floatLabel();
  }
}
