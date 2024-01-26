import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CellComponent],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {

}
