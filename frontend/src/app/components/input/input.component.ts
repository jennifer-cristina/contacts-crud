import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  isFocused: boolean = false;

  @Input() name: string;
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() id: string;

  changeFocus() {
    this.isFocused = !this.isFocused;
  }

  ngOnInit(): void {}
}
