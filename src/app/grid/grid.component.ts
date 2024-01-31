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
  sudokuArray: number[][]; // sudoku-like array
  sudokuArrayBoxwise: number [][]; // first index: box number, second index: cell number in each box
                                   // cell number in box is like box number in grid

  constructor() {
    console.log("SudokuString: " + this.sudokuString);
    this.sudokuArray = this.sudokuStringToArray(this.sudokuString);
    this.sudokuArrayBoxwise = this.sudokuArrayToBoxwise(this.sudokuArray);
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

  sudokuArrayToBoxwise(sudokuArray: number[][]) {
    let sudokuArrayBoxwise: number[][] = [[], [], [], [], [], [], [], [], []];

    for(let row = 0; row < 9; row = row + 1) {
      for(let col = 0; col < 9; col = col + 1) {
        let box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
        sudokuArrayBoxwise[box].push(sudokuArray[row][col]);
      }
    }

    console.log(sudokuArrayBoxwise);
    return sudokuArrayBoxwise;
  }
}

