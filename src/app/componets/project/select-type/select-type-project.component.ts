import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-type-project',
  templateUrl: './select-type-project.component.html',
  styleUrls: ['./select-type-project.component.scss']
})
export class SelectTypeProjectComponent implements OnInit {

  @Input() selectedProjectType:String;
  @Output() onProjectTypeSelected = new EventEmitter<String>();

  projectTypeList:String[] = [
    'Related course',
    'Extracurricular',
    'Internship',
  ];

  constructor() { }

  ngOnInit(): void {
    if(!this.selectedProjectType){
      this.selectedProjectType = this.projectTypeList[0];
      this.changeProjectType(this.selectedProjectType);
    }
  }

  changeProjectType(projectType:String){
    this.onProjectTypeSelected.emit(projectType);
  }

}
