import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  constructor(private rootFormGroup: FormGroupDirective) {}

  public form!: FormGroup;

  @Input() information: string;
  @Input() name: string;
  @Input() id: string;
  @Input() formControlName: string;

  ngOnInit(): void {
    this.form = <FormGroup>this.rootFormGroup.control;
  }
}
