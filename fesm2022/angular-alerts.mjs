import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Inject, Input, HostListener, Component, NgModule } from '@angular/core';

class TooltipDirective {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.isOverflowed = false;
        this.isAppended = false;
        this.title = '';
        this.showTooltip = true;
        this.overFlowCheck = false;
    }
    ngAfterContentInit() {
        this.tooltipEle = this.renderer.createElement('div');
        this.tooltipEle.classList.add('custom-tooltip');
        this.tooltipEle.style.position = "fixed";
        this.tooltipEle.style.padding = '10px 15px';
        this.tooltipEle.style.maxWidth = '400px';
        this.tooltipEle.style.width = 'fit-content';
        this.tooltipEle.style.backgroundColor = '#000000';
        this.tooltipEle.style.opacity = '0.85';
        this.tooltipEle.style.color = '#ffffff';
        this.tooltipEle.style.borderRadius = '5px';
        this.tooltipEle.style.fontSize = 'var(--cfs-14)';
        this.tooltipEle.style.height = 'fit-content';
        this.tooltipEle.style.zIndex = "99999999";
        this.tooltipEle.style.wordBreak = "break-word";
    }
    onHover(event) {
        if (this.showTooltip) {
            this.showToolTip(event);
        }
    }
    onMouseOut() {
        this.hideToolTip();
    }
    showToolTip(event) {
        let target = event.target;
        if (!target)
            return;
        this.isOverflowed = target.scrollWidth > target.offsetWidth || target.scrollHeight > target.offsetHeight;
        if (!this.isOverflowed && !this.title)
            return;
        if (this.overFlowCheck && !this.isOverflowed)
            return;
        this.renderer.appendChild(this.document.body, this.tooltipEle);
        this.isAppended = true;
        let title = "";
        if (target instanceof HTMLInputElement) {
            title = target.value;
        }
        else {
            title = target.innerText;
        }
        this.tooltipEle.innerText = this.title || title;
        //fetching top, left, right, bottom, width values of the element using getBoundingClientRect function
        let { top, left, right, bottom, width: targetWidth } = target.getBoundingClientRect();
        let toolTipHeight = 0;
        let toolTipWidth = 0;
        //fecting the window's inner height and outer width to know about the window size
        let windowHeight = window.innerHeight;
        let windowWidth = window.outerWidth;
        toolTipWidth = this.tooltipEle.getBoundingClientRect().width;
        toolTipHeight = this.tooltipEle.getBoundingClientRect().height;
        if (windowHeight - 150 >= top) {
            // show tooltip for element present on upper portion of the screen
            if ((windowWidth - 150) < right) {
                // show tooltip on "above portion + right" side of window
                this.tooltipEle.style.position = "fixed";
                this.tooltipEle.style.top = (bottom + 8) + 'px';
                this.tooltipEle.style.left = (left - (toolTipWidth - targetWidth)) + 'px';
            }
            else {
                // show tooltip on "above portion + left" side of window
                this.tooltipEle.style.position = "fixed";
                this.tooltipEle.style.top = (bottom + 8) + 'px';
                this.tooltipEle.style.left = left + 'px';
            }
        }
        else {
            // show tooltip on below portion of window
            if ((windowWidth - 150) >= right) {
                // show tooltip on "below portion + left" side of window
                this.tooltipEle.style.position = "fixed";
                this.tooltipEle.style.top = (top - toolTipHeight - 8) + 'px';
                this.tooltipEle.style.left = left + 'px';
            }
            else {
                // show tooltip on "below portion + right" side of window
                this.tooltipEle.style.position = "fixed";
                this.tooltipEle.style.top = (top - toolTipHeight - 8) + 'px';
                this.tooltipEle.style.left = (left - (toolTipWidth - targetWidth)) + 'px';
            }
        }
    }
    hideToolTip() {
        if (this.isAppended) {
            this.renderer.removeChild(this.document.body, this.tooltipEle);
            this.isAppended = false;
        }
    }
    ngOnDestroy() {
        this.hideToolTip();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.8", type: TooltipDirective, isStandalone: true, selector: "[tooltip]", inputs: { title: ["tooltip", "title"], showTooltip: "showTooltip", overFlowCheck: ["overFlow", "overFlowCheck"] }, host: { listeners: { "mouseenter": "onHover($event)", "mouseleave": "onMouseOut()", "click": "onMouseOut()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tooltip]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { title: [{
                type: Input,
                args: ['tooltip']
            }], showTooltip: [{
                type: Input,
                args: ['showTooltip']
            }], overFlowCheck: [{
                type: Input,
                args: ['overFlow']
            }], onHover: [{
                type: HostListener,
                args: ['mouseenter', ['$event']]
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseleave']
            }, {
                type: HostListener,
                args: ['click']
            }] } });

class AlertComponent {
    constructor() {
        this.isVisible = false;
        this.modalClass = '';
        this.modalTitle = '';
        this.modalMessage = '';
        this.buttonClass = '';
    }
    openModal(type) {
        this.isVisible = true;
        setTimeout(() => {
            document.querySelector('.modal')?.classList.add('show');
            document.querySelector('.modal-overlay')?.classList.add('show');
        }, 10); // Delay to trigger animation
        switch (type) {
            case 'success':
                this.modalClass = 'modal-success';
                this.modalTitle = 'Success';
                this.modalMessage = 'Operation completed successfully!';
                this.buttonClass = 'btn-success';
                break;
            case 'error':
                this.modalClass = 'modal-error';
                this.modalTitle = 'Error';
                this.modalMessage = 'An error occurred. Please try again.';
                this.buttonClass = 'btn-error';
                break;
            case 'warning':
                this.modalClass = 'modal-warning';
                this.modalTitle = 'Warning';
                this.modalMessage = 'Are you sure you want to proceed?';
                this.buttonClass = 'btn-warning';
                break;
            case 'info':
                this.modalClass = 'modal-info';
                this.modalTitle = 'Information';
                this.modalMessage = 'Here is some important information.';
                this.buttonClass = 'btn-info';
                break;
        }
    }
    closeModal() {
        this.isVisible = false;
        document.querySelector('.modal-overlay')?.classList.remove('show');
        setTimeout(() => {
            this.isVisible = false;
        }, 300);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: AlertComponent, isStandalone: true, selector: "lib-alert", ngImport: i0, template: "<div *ngIf=\"isVisible\" class=\"modal-overlay\">\n  <div [ngClass]=\"modalClass\" class=\"modal\">\n    <div class=\"modal-header\">\n      <h5>{{ modalTitle }}</h5>\n      <button class=\"close-btn\" (click)=\"closeModal()\">\u00D7</button>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{ modalMessage }}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        [ngClass]=\"buttonClass\"\n        class=\"btn\"\n        (click)=\"closeModal()\"\n      >\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n", styles: [".modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out,visibility .3s ease-in-out}.modal{background:#fff;width:450px;border-radius:12px;box-shadow:0 8px 30px #0000004d;overflow:hidden;transform:scale(.7);transition:transform .3s ease-out,opacity .3s ease-out;opacity:0}.modal-header{padding:20px;background:#007bff;color:#fff;font-size:1.25rem;display:flex;justify-content:space-between;align-items:center}.close-btn{border:none;background:none;font-size:1.5rem;cursor:pointer;color:#fff;transition:color .2s}.close-btn:hover{color:#ff3b3b}.btn{padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:background .2s,transform .2s,box-shadow .2s}.btn:hover{background:#218838;transform:translateY(-2px);box-shadow:0 6px 12px #0003}.modal-overlay.show{opacity:1;visibility:visible}.modal.show{transform:scale(1);opacity:1}@keyframes fadeIn{0%{opacity:0;transform:translateY(-10%)}to{opacity:1;transform:translateY(0)}}.modal-header{padding:20px;color:#fff;font-size:1.25rem;display:flex;justify-content:space-between;align-items:center}.modal-body{padding:20px;font-size:1rem;color:#333}.modal-success .modal-header{background:#28a745}.modal-success .modal-body{background-color:#d4edda}.modal-error .modal-header{background:#dc3545}.modal-error .modal-body{background-color:#f8d7da}.modal-warning .modal-header{background:#ffc107}.modal-warning .modal-body{background-color:#fff3cd}.modal-info .modal-header{background:#17a2b8}.modal-info .modal-body{background-color:#d1ecf1}.modal-footer{padding:15px;text-align:right;border-top:1px solid #eee}.btn{padding:10px 20px;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background .2s,transform .2s,box-shadow .2s}.btn-success{background-color:#28a745}.btn-error{background-color:#dc3545}.btn-warning{background-color:#ffc107}.btn-info{background-color:#17a2b8}.btn:hover{transform:translateY(-2px)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-alert', standalone: true, imports: [
                        CommonModule
                    ], template: "<div *ngIf=\"isVisible\" class=\"modal-overlay\">\n  <div [ngClass]=\"modalClass\" class=\"modal\">\n    <div class=\"modal-header\">\n      <h5>{{ modalTitle }}</h5>\n      <button class=\"close-btn\" (click)=\"closeModal()\">\u00D7</button>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{ modalMessage }}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        [ngClass]=\"buttonClass\"\n        class=\"btn\"\n        (click)=\"closeModal()\"\n      >\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n", styles: [".modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out,visibility .3s ease-in-out}.modal{background:#fff;width:450px;border-radius:12px;box-shadow:0 8px 30px #0000004d;overflow:hidden;transform:scale(.7);transition:transform .3s ease-out,opacity .3s ease-out;opacity:0}.modal-header{padding:20px;background:#007bff;color:#fff;font-size:1.25rem;display:flex;justify-content:space-between;align-items:center}.close-btn{border:none;background:none;font-size:1.5rem;cursor:pointer;color:#fff;transition:color .2s}.close-btn:hover{color:#ff3b3b}.btn{padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:background .2s,transform .2s,box-shadow .2s}.btn:hover{background:#218838;transform:translateY(-2px);box-shadow:0 6px 12px #0003}.modal-overlay.show{opacity:1;visibility:visible}.modal.show{transform:scale(1);opacity:1}@keyframes fadeIn{0%{opacity:0;transform:translateY(-10%)}to{opacity:1;transform:translateY(0)}}.modal-header{padding:20px;color:#fff;font-size:1.25rem;display:flex;justify-content:space-between;align-items:center}.modal-body{padding:20px;font-size:1rem;color:#333}.modal-success .modal-header{background:#28a745}.modal-success .modal-body{background-color:#d4edda}.modal-error .modal-header{background:#dc3545}.modal-error .modal-body{background-color:#f8d7da}.modal-warning .modal-header{background:#ffc107}.modal-warning .modal-body{background-color:#fff3cd}.modal-info .modal-header{background:#17a2b8}.modal-info .modal-body{background-color:#d1ecf1}.modal-footer{padding:15px;text-align:right;border-top:1px solid #eee}.btn{padding:10px 20px;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background .2s,transform .2s,box-shadow .2s}.btn-success{background-color:#28a745}.btn-error{background-color:#dc3545}.btn-warning{background-color:#ffc107}.btn-info{background-color:#17a2b8}.btn:hover{transform:translateY(-2px)}\n"] }]
        }] });

class AlertPopupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, imports: [
            // CommonModule,
            AlertComponent], exports: [AlertComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, imports: [
            // CommonModule,
            AlertComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, decorators: [{
            type: NgModule,
            args: [{
                    //   declarations: [
                    //     AlertComponent
                    //   ],
                    imports: [
                        // CommonModule,
                        AlertComponent
                    ],
                    exports: [AlertComponent],
                }]
        }] });

/*
 * Public API Surface of directives
 */
// Standalone export

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertPopupModule, TooltipDirective };
//# sourceMappingURL=angular-alerts.mjs.map
