import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]' // Our Attribute selector
})
export class DropdownDirective {

    // Should allow us to add a CSS class to the element it sits on, once it is clicked,
    // and remove the class once it is clicked again

    // To dynamically attach/detatch a CSS class, use @HostBinding,
    // allows us to bind to properties of the element.
    // "open" is the CSS class we need to attach/detatch to/from dynamically
    @HostBinding('class.open') isOpen = false;

    // Listen to a click event
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }

    constructor(private elRef: ElementRef) {}

}