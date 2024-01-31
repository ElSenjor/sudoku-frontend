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
  //sudokuArray: int[] = 
  function sudokuStringToArray(sudokuString) {
    digit1: number = sudokuString[0]
    console.log(digit1)
    //return sudokuArray
  }

}

