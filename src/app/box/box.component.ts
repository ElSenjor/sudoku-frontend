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
    console.log("Hello, I am the constructor of the BoxComponent class");
 /*    @Input() testString: String = '';
    @Input() testArray: Number[][] = [[], [], [], [], [], [], [], [], []];
      console.log("Hello, I am the constructor of the BoxComponent class");
    console.log("testString: " + testString);
    console.log("testArray: " + testArray); */  
  }
  // constructor(){
    //console.log("Hello, I am the constructor of the BoxComponent class")
    //@Input() sudokuArrayBoxwise2: number[][];
    //console.log(sudokuArrayBoxwise2)
    // sudokuArrayBoxwise: number [][];
    
    // sudokuArrayBoxwise = this.GridComponent.sudokuArrayBoxwise;
  // }
}
