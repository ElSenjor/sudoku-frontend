import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [BoxComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  sudokuString: string = "006040097040730010017092030600070080105060903020010006050980160090056070860020300" 

  constructor() {
    console.log("SudokuString: " + this.sudokuString);
    this.sudokuStringToArray(this.sudokuString);
  }

  sudokuStringToArray(sudokuString: string) {
    let sudokuArray: number[][] = [[], [], [], [], [], [], [], [], []];
    
    for(let i = 0; i < 81; i = i + 1) {
      let row: number = Math.floor(i / 9);
      let col: number = i % 9;
      let digit = Number(sudokuString[i])
      sudokuArray[row][col] = digit;
    }
    console.log(sudokuArray);

    return sudokuArray
  }
}

