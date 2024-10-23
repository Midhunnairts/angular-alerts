import { AfterContentInit, OnDestroy, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TooltipDirective implements AfterContentInit, OnDestroy {
    private renderer;
    private document;
    tooltipEle: HTMLElement;
    isOverflowed: boolean;
    isAppended: boolean;
    title: string;
    showTooltip: boolean;
    overFlowCheck: boolean;
    constructor(renderer: Renderer2, document: Document);
    ngAfterContentInit(): void;
    onHover(event: MouseEvent): void;
    onMouseOut(): void;
    showToolTip(event: MouseEvent): void;
    hideToolTip(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[tooltip]", never, { "title": { "alias": "tooltip"; "required": false; }; "showTooltip": { "alias": "showTooltip"; "required": false; }; "overFlowCheck": { "alias": "overFlow"; "required": false; }; }, {}, never, never, true, never>;
}
