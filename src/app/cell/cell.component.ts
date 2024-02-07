import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  @Input()
  borderRight: boolean = false;

  @Input()
  borderBottom: boolean = false;

  @Input()
  defaultValue: string = "0";

  // If the value is Zero, return an empty string
  defaultValueEmptyIfZero(value: string){
    let result: string = value;
    if(value == "0"){
      result = ""
    }
    return result
  }

// Here, I am trying to set those cells to read only that have numbers unequal to zero
// However, I wasn't able to get it working in the input tag in the html file yet
  ValueUnequalToZero(value: string){
    let readOnly: string = ""
    if(value != "0"){
      readOnly = "readonly"
    }
    return readOnly
  }

}
