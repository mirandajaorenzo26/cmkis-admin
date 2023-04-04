import { Component } from '@angular/core';

@Component({
  selector: 'app-key-inventory',
  templateUrl: './key-inventory.component.html',
  styleUrls: ['./key-inventory.component.scss']
})
export class KeyInventoryComponent {
  keys= [
    {"room": 'IT101', 'isAvailable': true },
    {"room": 'IT102', 'isAvailable': true },
    {"room": 'IT103', 'isAvailable': true },
    {"room": 'IT104', 'isAvailable': true },
    {"room": 'IT105', 'isAvailable': true },
    {"room": 'IT106', 'isAvailable': true },
  ]


}
