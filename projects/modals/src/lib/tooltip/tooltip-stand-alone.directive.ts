import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Directive, HostListener, Inject, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  standalone: true
})

export class TooltipDirective implements AfterContentInit, OnDestroy {
  tooltipEle!: HTMLElement;
  isOverflowed = false;
  isAppended = false;

  @Input('tooltip') title = '';
  @Input('showTooltip') showTooltip: boolean = true;
  @Input('overFlow') overFlowCheck: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterContentInit(): void {
    this.tooltipEle = this.renderer.createElement('div');
    this.tooltipEle.classList.add('custom-tooltip')
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

  @HostListener('mouseenter', ['$event'])
  onHover(event: MouseEvent) {
    if (this.showTooltip) {
      this.showToolTip(event);
    }
  }

  @HostListener('mouseleave')
  @HostListener('click')
  onMouseOut() {
    this.hideToolTip();
  }

  showToolTip(event: MouseEvent) {
    let target = event.target as HTMLElement;
    if (!target) return;
    this.isOverflowed = target.scrollWidth > target.offsetWidth || target.scrollHeight > target.offsetHeight  ;
    if (!this.isOverflowed && !this.title) return;
    if(this.overFlowCheck && !this.isOverflowed) return

    this.renderer.appendChild(this.document.body, this.tooltipEle);
    this.isAppended = true;

    let title = "";
    if (target instanceof HTMLInputElement) {
      title = target.value;
    } else {
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
      } else {
        // show tooltip on "above portion + left" side of window
        this.tooltipEle.style.position = "fixed";
        this.tooltipEle.style.top = (bottom + 8) + 'px';
        this.tooltipEle.style.left = left + 'px';
      }
    } else {
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

  ngOnDestroy(): void {
    this.hideToolTip();
  }
}