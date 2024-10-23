import * as i0 from "@angular/core";
export declare class AlertComponent {
    isVisible: boolean;
    modalClass: string;
    modalTitle: string;
    modalMessage: string;
    buttonClass: string;
    openModal(type: 'success' | 'error' | 'warning' | 'info'): void;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "lib-alert", never, {}, {}, never, never, true, never>;
}
