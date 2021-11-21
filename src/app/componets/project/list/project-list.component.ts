import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projectList: Project[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
