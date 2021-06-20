import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ['ali', 'omar'];
  // @ViewChild('item') itemInput: string;
  addItem(param: string) {
    this.items.push(param)
    param = '';
  }
  delete(itemID: number) {
    this.items.splice(itemID, 1);
  }
}
