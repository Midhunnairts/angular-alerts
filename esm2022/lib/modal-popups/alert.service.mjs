// src/app/alert.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class AlertService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYWxlcnRzL3NyYy9saWIvbW9kYWwtcG9wdXBzL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFNdkMsTUFBTSxPQUFPLFlBQVk7SUFIekI7UUFJVSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFzQixJQUFJLENBQUMsQ0FBQztLQWF4RTtJQVhDLFNBQVMsQ0FBQyxPQUFxQjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7OEdBYlUsWUFBWTtrSEFBWixZQUFZLGNBRlgsTUFBTTs7MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FsZXJ0LnNlcnZpY2UudHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnRPcHRpb25zIH0gZnJvbSAnLi9hbGVydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XG4gIHByaXZhdGUgYWxlcnRPcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWxlcnRPcHRpb25zIHwgbnVsbD4obnVsbCk7XG5cbiAgc2hvd0FsZXJ0KG9wdGlvbnM6IEFsZXJ0T3B0aW9ucykge1xuICAgIHRoaXMuYWxlcnRPcHRpb25zJC5uZXh0KG9wdGlvbnMpO1xuICB9XG5cbiAgY2xvc2VBbGVydCgpIHtcbiAgICB0aGlzLmFsZXJ0T3B0aW9ucyQubmV4dChudWxsKTtcbiAgfVxuXG4gIGdldEFsZXJ0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydE9wdGlvbnMkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=