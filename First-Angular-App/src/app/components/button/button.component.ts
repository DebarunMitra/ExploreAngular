import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = "Click Me";
  @Input() color: string = "gray";
  @Output() btnClick = new EventEmitter();

  onClick() {
    console.log("On Click Action!");
    this.btnClick.emit();
  }
}
