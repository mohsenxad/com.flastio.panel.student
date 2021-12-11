import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'project-strength',
  templateUrl: './project-strength.component.html',
  styleUrls: ['./project-strength.component.scss']
})
export class ProjectStrengthComponent implements OnInit {

  @Input() project : Project;

  strengthValue:Number = 0;
  strengthMaxValue:Number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): Number{
    return 5;
  }

}
