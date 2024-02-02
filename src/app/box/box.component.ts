import { Component, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
// import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CellComponent],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  constructor(){
    console.log("Hello, I am the constructor of the BoxComponent class. And who are you, Sir?");
  }
  @Input()
  cellArray: string[] = ["1","2","3","4","5","6","7","8","9"]

}
