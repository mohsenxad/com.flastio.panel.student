import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { iif } from 'rxjs';
import { LinkUrl } from 'src/app/model/linkUrl';
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
    if(this.project.summeryFileUrl){
      this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.summeryFileUrl.toString());
    }
  }

  edit(){
    this.onEdit.emit(this.project);
  }

  delete(){
    this.onDelete.emit(this.project);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

  getSummeryFileUrl():SafeResourceUrl {
    //let result: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(this.project.summeryFileUrl.toString());
    let onlineServiceUrl = '//sharecad.org/cadframe/load?url='+this.project.summeryFileUrl;
    let result: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(onlineServiceUrl);
    console.log(result);
    return result;
  }

  getSummeryFileIFrameUrl():SafeResourceUrl {
    //let result: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(this.project.summeryFileUrl.toString());
    let onlineServiceUrl = '//sharecad.org/cadframe/load?url='+this.project.summeryFileUrl;
    let result: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(onlineServiceUrl);
    console.log(result);
    return result;
  }

  viewLinkUrl(linkUrl:LinkUrl):void{
    console.log('viwing ...');
    window.open(linkUrl.url.toString());
    
  }

}
