import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1zdGFuZC1hbG9uZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWFsZXJ0cy9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC1zdGFuZC1hbG9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQzs7QUFPL0csTUFBTSxPQUFPLGdCQUFnQjtJQVMzQixZQUNVLFFBQW1CLEVBQ0QsUUFBa0I7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFUOUMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDUCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQUs5QyxDQUFDO0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENB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WTt1QkFBQyxZQUFZOztzQkFDekIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgdG9vbHRpcEVsZSE6IEhUTUxFbGVtZW50O1xuICBpc092ZXJmbG93ZWQgPSBmYWxzZTtcbiAgaXNBcHBlbmRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgndG9vbHRpcCcpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgnc2hvd1Rvb2x0aXAnKSBzaG93VG9vbHRpcDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnb3ZlckZsb3cnKSBvdmVyRmxvd0NoZWNrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcEVsZSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy50b29sdGlwRWxlLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS10b29sdGlwJylcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgdGhpcy50b29sdGlwRWxlLnN0eWxlLnBhZGRpbmcgPSAnMTBweCAxNXB4JztcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUubWF4V2lkdGggPSAnNDAwcHgnO1xuICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS53aWR0aCA9ICdmaXQtY29udGVudCc7XG4gICAgdGhpcy50b29sdGlwRWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJztcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUub3BhY2l0eSA9ICcwLjg1JztcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgdGhpcy50b29sdGlwRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xuICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS5mb250U2l6ZSA9ICd2YXIoLS1jZnMtMTQpJztcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUuekluZGV4ID0gXCI5OTk5OTk5OVwiO1xuICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJyRldmVudCddKVxuICBvbkhvdmVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvd1Rvb2x0aXApIHtcbiAgICAgIHRoaXMuc2hvd1Rvb2xUaXAoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uTW91c2VPdXQoKSB7XG4gICAgdGhpcy5oaWRlVG9vbFRpcCgpO1xuICB9XG5cbiAgc2hvd1Rvb2xUaXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdGhpcy5pc092ZXJmbG93ZWQgPSB0YXJnZXQuc2Nyb2xsV2lkdGggPiB0YXJnZXQub2Zmc2V0V2lkdGggfHwgdGFyZ2V0LnNjcm9sbEhlaWdodCA+IHRhcmdldC5vZmZzZXRIZWlnaHQgIDtcbiAgICBpZiAoIXRoaXMuaXNPdmVyZmxvd2VkICYmICF0aGlzLnRpdGxlKSByZXR1cm47XG4gICAgaWYodGhpcy5vdmVyRmxvd0NoZWNrICYmICF0aGlzLmlzT3ZlcmZsb3dlZCkgcmV0dXJuXG5cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy50b29sdGlwRWxlKTtcbiAgICB0aGlzLmlzQXBwZW5kZWQgPSB0cnVlO1xuXG4gICAgbGV0IHRpdGxlID0gXCJcIjtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgdGl0bGUgPSB0YXJnZXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gdGFyZ2V0LmlubmVyVGV4dDtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwRWxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGUgfHwgdGl0bGU7XG4gICAgLy9mZXRjaGluZyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHdpZHRoIHZhbHVlcyBvZiB0aGUgZWxlbWVudCB1c2luZyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnVuY3Rpb25cbiAgICBsZXQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHdpZHRoOiB0YXJnZXRXaWR0aCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB0b29sVGlwSGVpZ2h0ID0gMDtcbiAgICBsZXQgdG9vbFRpcFdpZHRoID0gMDtcbiAgICAvL2ZlY3RpbmcgdGhlIHdpbmRvdydzIGlubmVyIGhlaWdodCBhbmQgb3V0ZXIgd2lkdGggdG8ga25vdyBhYm91dCB0aGUgd2luZG93IHNpemVcbiAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoO1xuXG4gICAgdG9vbFRpcFdpZHRoID0gdGhpcy50b29sdGlwRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRvb2xUaXBIZWlnaHQgPSB0aGlzLnRvb2x0aXBFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgaWYgKHdpbmRvd0hlaWdodCAtIDE1MCA+PSB0b3ApIHtcbiAgICAgIC8vIHNob3cgdG9vbHRpcCBmb3IgZWxlbWVudCBwcmVzZW50IG9uIHVwcGVyIHBvcnRpb24gb2YgdGhlIHNjcmVlblxuICAgICAgaWYgKCh3aW5kb3dXaWR0aCAtIDE1MCkgPCByaWdodCkge1xuICAgICAgICAvLyBzaG93IHRvb2x0aXAgb24gXCJhYm92ZSBwb3J0aW9uICsgcmlnaHRcIiBzaWRlIG9mIHdpbmRvd1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS50b3AgPSAoYm90dG9tICsgOCkgKyAncHgnO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUubGVmdCA9IChsZWZ0IC0gKHRvb2xUaXBXaWR0aCAtIHRhcmdldFdpZHRoKSkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2hvdyB0b29sdGlwIG9uIFwiYWJvdmUgcG9ydGlvbiArIGxlZnRcIiBzaWRlIG9mIHdpbmRvd1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS50b3AgPSAoYm90dG9tICsgOCkgKyAncHgnO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaG93IHRvb2x0aXAgb24gYmVsb3cgcG9ydGlvbiBvZiB3aW5kb3dcbiAgICAgIGlmICgod2luZG93V2lkdGggLSAxNTApID49IHJpZ2h0KSB7XG4gICAgICAgIC8vIHNob3cgdG9vbHRpcCBvbiBcImJlbG93IHBvcnRpb24gKyBsZWZ0XCIgc2lkZSBvZiB3aW5kb3dcbiAgICAgICAgdGhpcy50b29sdGlwRWxlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUudG9wID0gKHRvcCAtIHRvb2xUaXBIZWlnaHQgLSA4KSArICdweCc7XG4gICAgICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gc2hvdyB0b29sdGlwIG9uIFwiYmVsb3cgcG9ydGlvbiArIHJpZ2h0XCIgc2lkZSBvZiB3aW5kb3dcbiAgICAgICAgdGhpcy50b29sdGlwRWxlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbGUuc3R5bGUudG9wID0gKHRvcCAtIHRvb2xUaXBIZWlnaHQgLSA4KSArICdweCc7XG4gICAgICAgIHRoaXMudG9vbHRpcEVsZS5zdHlsZS5sZWZ0ID0gKGxlZnQgLSAodG9vbFRpcFdpZHRoIC0gdGFyZ2V0V2lkdGgpKSArICdweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGlkZVRvb2xUaXAoKSB7XG4gICAgaWYgKHRoaXMuaXNBcHBlbmRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMudG9vbHRpcEVsZSk7XG4gICAgICB0aGlzLmlzQXBwZW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVUb29sVGlwKCk7XG4gIH1cbn0iXX0=