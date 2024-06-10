import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  value: number = 15;

  ngOnInit() {
    this.log(this.value.toString());
  }

  changeValue(num: number): void {
    this.value = num;
    this.log(this.value.toString());
  }

  log(message: string): void {
    console.log(`Log: ${message}`);
  }
}
