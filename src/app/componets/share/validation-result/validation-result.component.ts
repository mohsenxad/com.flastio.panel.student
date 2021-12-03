import { Component, Input, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'validation-result',
  templateUrl: './validation-result.component.html',
  styleUrls: ['./validation-result.component.scss']
})
export class ValidationResultComponent implements OnInit {

  @Input() validationResult:ValidationResult;
  
  constructor() { }

  ngOnInit(): void {
  }

}
