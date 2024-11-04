import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Inject, Input, HostListener, Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

// src/app/alert.service.ts
class AlertService {
    constructor() {
        this.alertOptions$ = new BehaviorSubject(null);
    }
    showAlert(options) {
        this.alertOptions$.next(options);
    }
    closeAlert() {
        this.alertOptions$.next(null);
    }
    getAlertOptions() {
        return this.alertOptions$.asObservable();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alertOptions = null;
    }
    ngOnInit() {
        this.alertService.getAlertOptions().subscribe((options) => {
            this.alertOptions = options;
        });
    }
    confirm() {
        this.alertService.closeAlert();
    }
    cancel() {
        this.alertService.closeAlert();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: AlertComponent, isStandalone: true, selector: "lib-alert", ngImport: i0, template: "<!-- src/app/alert/alert.component.html -->\n<div *ngIf=\"alertOptions\" class=\"alert-backdrop\" [ngStyle]=\"{'background': alertOptions.backdrop ? 'rgba(0, 0, 0, 0.5)' : 'transparent'}\">\n  <div class=\"alert-popup\"\n       [ngClass]=\"alertOptions.icon ? 'alert-icon-' + alertOptions.icon : ''\"\n       >\n    \n    <!-- Icon and Title -->\n    <div *ngIf=\"alertOptions.icon\" class=\"alert-icon\" [ngClass]=\"alertOptions.icon\" [style.color]=\"alertOptions.iconColor\">\n      <!-- <i [class]=\"getIconClass(alertOptions.icon)\"></i> -->\n    </div>\n    <h2 class=\"alert-title\" [innerHTML]=\"alertOptions.title\"></h2>\n    \n    <!-- Text Content -->\n    <div class=\"alert-body\">\n      <p [innerHTML]=\"alertOptions.text || alertOptions.html\"></p>\n    </div>\n    \n    <!-- Footer Content -->\n    <div *ngIf=\"alertOptions.footer\" class=\"alert-footer\">{{ alertOptions.footer }}</div>\n    \n    <!-- Action Buttons -->\n    <div class=\"alert-actions\">\n      <button *ngIf=\"alertOptions.showConfirmButton\" (click)=\"confirm()\"\n              [style.background]=\"alertOptions.iconColor\">{{ alertOptions.confirmButtonText || 'OK' }}</button>\n      <button *ngIf=\"alertOptions.showCancelButton\" (click)=\"cancel()\"\n              [style.color]=\"alertOptions.iconColor\">{{ alertOptions.cancelButtonText || 'Cancel' }}</button>\n    </div>\n  </div>\n</div>\n", styles: [".alert-backdrop{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#00000080;z-index:100000}.alert-popup{width:100%;max-width:400px;background:#fff;border-radius:10px;box-shadow:0 4px 10px #0000004d;padding:20px;text-align:center;transform:scale(.8);opacity:0;animation:alertFadeIn .3s forwards}@keyframes alertFadeIn{to{transform:scale(1);opacity:1}}.alert-icon{font-size:3em;margin:10px 0}.alert-icon.warning{color:orange}.alert-icon.error{color:red}.alert-icon.success{color:green}.alert-icon.info{color:#00f}.alert-title{font-size:1.5em;margin:10px 0}.alert-body{font-size:1em;color:#333;margin:10px 0}.alert-footer{font-size:.9em;color:#888;margin-top:15px}.alert-actions{display:flex;justify-content:center;margin-top:20px}.alert-actions button{padding:10px 15px;margin:0 5px;border:none;border-radius:5px;cursor:pointer;font-size:1em;transition:background .3s ease}.alert-actions button:hover{opacity:.9}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-alert', standalone: true, imports: [
                        CommonModule
                    ], template: "<!-- src/app/alert/alert.component.html -->\n<div *ngIf=\"alertOptions\" class=\"alert-backdrop\" [ngStyle]=\"{'background': alertOptions.backdrop ? 'rgba(0, 0, 0, 0.5)' : 'transparent'}\">\n  <div class=\"alert-popup\"\n       [ngClass]=\"alertOptions.icon ? 'alert-icon-' + alertOptions.icon : ''\"\n       >\n    \n    <!-- Icon and Title -->\n    <div *ngIf=\"alertOptions.icon\" class=\"alert-icon\" [ngClass]=\"alertOptions.icon\" [style.color]=\"alertOptions.iconColor\">\n      <!-- <i [class]=\"getIconClass(alertOptions.icon)\"></i> -->\n    </div>\n    <h2 class=\"alert-title\" [innerHTML]=\"alertOptions.title\"></h2>\n    \n    <!-- Text Content -->\n    <div class=\"alert-body\">\n      <p [innerHTML]=\"alertOptions.text || alertOptions.html\"></p>\n    </div>\n    \n    <!-- Footer Content -->\n    <div *ngIf=\"alertOptions.footer\" class=\"alert-footer\">{{ alertOptions.footer }}</div>\n    \n    <!-- Action Buttons -->\n    <div class=\"alert-actions\">\n      <button *ngIf=\"alertOptions.showConfirmButton\" (click)=\"confirm()\"\n              [style.background]=\"alertOptions.iconColor\">{{ alertOptions.confirmButtonText || 'OK' }}</button>\n      <button *ngIf=\"alertOptions.showCancelButton\" (click)=\"cancel()\"\n              [style.color]=\"alertOptions.iconColor\">{{ alertOptions.cancelButtonText || 'Cancel' }}</button>\n    </div>\n  </div>\n</div>\n", styles: [".alert-backdrop{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:#00000080;z-index:100000}.alert-popup{width:100%;max-width:400px;background:#fff;border-radius:10px;box-shadow:0 4px 10px #0000004d;padding:20px;text-align:center;transform:scale(.8);opacity:0;animation:alertFadeIn .3s forwards}@keyframes alertFadeIn{to{transform:scale(1);opacity:1}}.alert-icon{font-size:3em;margin:10px 0}.alert-icon.warning{color:orange}.alert-icon.error{color:red}.alert-icon.success{color:green}.alert-icon.info{color:#00f}.alert-title{font-size:1.5em;margin:10px 0}.alert-body{font-size:1em;color:#333;margin:10px 0}.alert-footer{font-size:.9em;color:#888;margin-top:15px}.alert-actions{display:flex;justify-content:center;margin-top:20px}.alert-actions button{padding:10px 15px;margin:0 5px;border:none;border-radius:5px;cursor:pointer;font-size:1em;transition:background .3s ease}.alert-actions button:hover{opacity:.9}\n"] }]
        }], ctorParameters: () => [{ type: AlertService }] });

class AlertPopupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, imports: [AlertComponent], exports: [AlertComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, imports: [AlertComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: AlertPopupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
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

export { AlertComponent, AlertPopupModule, AlertService, TooltipDirective };
//# sourceMappingURL=angular-alerts.mjs.map
