// src/app/alert.model.ts
export interface AlertOptions {
    title?: string;
    titleText?: string;
    text?: string;
    html?: string;
    icon?: 'warning' | 'error' | 'success' | 'info' | 'question' | string;
    iconColor?: string;
    animation?: boolean;
    backdrop?: boolean | string;
    position?: 'top' | 'center' | 'bottom' | 'left' | 'right';
    footer?: string;
    showConfirmButton?: boolean;
    confirmButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    customClass?: {
        popup?: string;
        header?: string;
        icon?: string;
        footer?: string;
    };
}
