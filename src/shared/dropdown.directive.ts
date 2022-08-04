import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    // whenever isOpen is true the class open will be applied and dropdown will be opened.
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') toggle() {
        const dropdownMenu = this.renderer.nextSibling(this.elementRef.nativeElement);
        if (dropdownMenu.classList.contains('show')) {
            this.renderer.removeClass(dropdownMenu, 'show');
        } else {
            this.renderer.addClass(dropdownMenu, 'show');
        }
    }
}