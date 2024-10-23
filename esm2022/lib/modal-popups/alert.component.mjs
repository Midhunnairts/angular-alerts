import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1hbGVydHMvc3JjL2xpYi9tb2RhbC1wb3B1cHMvYWxlcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1hbGVydHMvc3JjL2xpYi9tb2RhbC1wb3B1cHMvYWxlcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7OztBQVdqRCxNQUFNLE9BQU8sY0FBYztJQVQzQjtRQVVFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0tBMkMxQjtJQXpDQyxTQUFTLENBQUMsSUFBOEM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7UUFDckMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsbUNBQW1DLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2dCQUNqQyxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLG1DQUFtQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcscUNBQXFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO2dCQUM5QixNQUFNO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OEdBL0NVLGNBQWM7a0dBQWQsY0FBYyxxRUNaM0IsbWlCQW9CQSxtcEVEWEksWUFBWTs7MkZBR0gsY0FBYztrQkFUMUIsU0FBUzsrQkFDRSxXQUFXLGNBR1QsSUFBSSxXQUNQO3dCQUNQLFlBQVk7cUJBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogYC4vYWxlcnQuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybDogJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBpc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9kYWxDbGFzczogc3RyaW5nID0gJyc7XG4gIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xuICBtb2RhbE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBidXR0b25DbGFzczogc3RyaW5nID0gJyc7XG5cbiAgb3Blbk1vZGFsKHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKT8uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKT8uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIH0sIDEwKTsgLy8gRGVsYXkgdG8gdHJpZ2dlciBhbmltYXRpb25cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnbW9kYWwtc3VjY2Vzcyc7XG4gICAgICAgIHRoaXMubW9kYWxUaXRsZSA9ICdTdWNjZXNzJztcbiAgICAgICAgdGhpcy5tb2RhbE1lc3NhZ2UgPSAnT3BlcmF0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkhJztcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9ICdidG4tc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnbW9kYWwtZXJyb3InO1xuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAnRXJyb3InO1xuICAgICAgICB0aGlzLm1vZGFsTWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J0bi1lcnJvcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdtb2RhbC13YXJuaW5nJztcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ1dhcm5pbmcnO1xuICAgICAgICB0aGlzLm1vZGFsTWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZD8nO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J0bi13YXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ21vZGFsLWluZm8nO1xuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAnSW5mb3JtYXRpb24nO1xuICAgICAgICB0aGlzLm1vZGFsTWVzc2FnZSA9ICdIZXJlIGlzIHNvbWUgaW1wb3J0YW50IGluZm9ybWF0aW9uLic7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSAnYnRuLWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiaXNWaXNpYmxlXCIgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+XG4gIDxkaXYgW25nQ2xhc3NdPVwibW9kYWxDbGFzc1wiIGNsYXNzPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICA8aDU+e3sgbW9kYWxUaXRsZSB9fTwvaDU+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPsOXPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgIDxwPnt7IG1vZGFsTWVzc2FnZSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzXCJcbiAgICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgICAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCJcbiAgICAgID5cbiAgICAgICAgQ2xvc2VcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19