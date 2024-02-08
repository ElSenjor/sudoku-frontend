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

  valIsZero: boolean = false;

  ngOnInit(){
    this.valIsZero = this.ValueEqualToZero(this.defaultValue);
  }

  // If the value is Zero, return an empty string
  defaultValueEmptyIfZero(value: string){
    let result: string = value;
    if(value == "0"){
      result = "";
    }
    return result;
  }
  // if the value is equal to zero, return true (boolean)
  ValueEqualToZero(value: string){
    let valIsZero: boolean = false;
    if(value == "0"){
      valIsZero = true;
    }
    return valIsZero;
  }

}
