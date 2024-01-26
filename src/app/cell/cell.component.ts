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

  ngOnInit() {
    console.log("hello");
  }
}
