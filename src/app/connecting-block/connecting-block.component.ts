import { Component } from '@angular/core';

@Component({
  selector: 'app-connecting-block',
  templateUrl: './connecting-block.component.html',
  styleUrls: ['./connecting-block.component.css']
})
export class ConnectingBlockComponent {

  item = {
    name: "Item 1",
    child: [
      {
        name: "Item 2",
        child: [
          {
            name: "Item 4",
          }
        ]
      },
      {
        name: "Item 3",
        child: [
          {
            name: "Item 5",
          }
        ]
      }
    ]
  }

}
