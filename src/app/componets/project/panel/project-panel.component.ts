import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit {

  @Input() projectList: Project[];

  isAddProjectVisible:Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showAddProjectForm(){
    this.isAddProjectVisible = true;
  }

  hideAddProjectForm(){
    this.isAddProjectVisible = false;
  }


}
