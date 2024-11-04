import { AlertOptions } from './alert.model';
import * as i0 from "@angular/core";
export declare class AlertService {
    private alertOptions$;
    showAlert(options: AlertOptions): void;
    closeAlert(): void;
    getAlertOptions(): import("rxjs").Observable<AlertOptions | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
