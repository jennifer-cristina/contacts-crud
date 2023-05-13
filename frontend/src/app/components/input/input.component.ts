import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  show: boolean = false;
  isFocused: boolean = false;

  constructor() {}

  @Input() name: string;
  @Input() placeholder: string;

  showMessage() {
    this.show = !this.show;
    console.log('foi');
  }

  changeFocus() {
    this.isFocused = !this.isFocused;
  }

  ngOnInit(): void {}
}
