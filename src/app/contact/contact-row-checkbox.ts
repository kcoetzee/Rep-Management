import {Component, Input} from '@angular/core';

@Component({
    selector: 'rep-checkbox',
    templateUrl: './contact-row-checkbox.html'
})

export class ContactRowCheckboxComponent {
    @Input() field: string;

    onClick(): void{
        console.log(this.field);
    }
}