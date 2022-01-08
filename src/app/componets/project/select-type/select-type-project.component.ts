import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'select-type-project',
  templateUrl: './select-type-project.component.html',
  styleUrls: ['./select-type-project.component.scss']
})
export class SelectTypeProjectComponent implements OnInit, OnChanges {

  @Input() selectedProjectType:String;
  @Output() onProjectTypeSelected = new EventEmitter<String>();

  projectTypeList:String[] = [
    'Course Project',
    'Extracurricular',
    'Internship',
  ];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    if(!this.selectedProjectType){
      this.selectedProjectType = this.projectTypeList[0];
    }
  }

  changed(selectedYear:String){
    this.selectedProjectType = selectedYear;
    this.onProjectTypeSelected.emit(this.selectedProjectType);
  }

}
