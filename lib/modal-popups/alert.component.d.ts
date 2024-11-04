import { OnInit } from '@angular/core';
import { AlertOptions } from './alert.model';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    private alertService;
    alertOptions: AlertOptions | null;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    confirm(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "lib-alert", never, {}, {}, never, never, true, never>;
}
