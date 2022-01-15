import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SupportingFile } from '../../../model/supportingFile';

@Component({
  selector: 'supporting-file-list-item',
  templateUrl: './supporting-file-list-item.component.html',
  styleUrls: ['./supporting-file-list-item.component.scss']
})
export class SupportingFileListItemComponent implements OnInit {
  @Input() supportingFile: SupportingFile;
  @Output() onDeleted = new EventEmitter<SupportingFile>();
  @Output() onViewed = new EventEmitter<SupportingFile>();

  isRemovable:Boolean = false;
  isViewable:Boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.onDeleted.observers.length > 0){
      this.isRemovable = true;
    }
    if(this.onViewed.observers.length > 0){
      this.isViewable = true;
    }
    
  }

  view(){
    console.log('viwing ...');
    window.open(this.supportingFile.remoteUrl.toString());
  }

}
