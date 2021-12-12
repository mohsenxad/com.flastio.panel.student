import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Project } from '../../../model/project';

@Component({
  selector: 'project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {


  @Input() project: Project;
  @Output() onEdit = new EventEmitter<Project>();
  @Output() onDelete = new EventEmitter<Project>();
  @Output() onChangeIndex = new EventEmitter<Number>();

  safeResourceUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.summeryFileUrl.toString());
  }

  edit(){
    console.log('edit project');
    
  }

  delete(){
    this.onDelete.emit(this.project);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

  getSummeryFileUrl():SafeResourceUrl {
    let result: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.summeryFileUrl.toString());
    console.log(result);
    return result;
  }

}
