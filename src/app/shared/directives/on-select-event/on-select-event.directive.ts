import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef } from "@angular/core";

@Directive({
    selector: '[onSelectEvent]'
})
export class OnSelectEventDirective implements OnInit{

    @Input() ElementInputInstrutor!: any
    @Input() ElementInputLocal!: any

    constructor(private element: ElementRef, private render: Renderer2) { }

    ngOnInit(): void {
        if(this.element.nativeElement.checked){
            this.render.setProperty(this.ElementInputInstrutor, 'disabled', false);
            this.render.setProperty(this.ElementInputLocal, 'disabled', false);
            console.log(this.ElementInputInstrutor);
            console.log(this.ElementInputLocal);
            this.ElementInputInstrutor.disabled = false;
            this.ElementInputLocal.disabled = false;
            console.log(this.ElementInputInstrutor.disabled);
            console.log(this.ElementInputLocal.disabled);
        }
    }
    
}