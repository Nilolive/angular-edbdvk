import { Component, OnInit } from '@angular/core';
import { orderDetails } from './data';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public data: Object[] = [];

    ngOnInit(): void {
        this.data = orderDetails;
    }
}