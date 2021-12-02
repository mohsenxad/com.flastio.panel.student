import { Component, Input, OnInit } from '@angular/core';
import { SupportingFile } from '../../../model/supportingFile';

@Component({
  selector: 'supporting-file-list-item',
  templateUrl: './supporting-file-list-item.component.html',
  styleUrls: ['./supporting-file-list-item.component.scss']
})
export class SupportingFileListItemComponent implements OnInit {
  @Input() supportingFile: SupportingFile;
  constructor() { }

  ngOnInit(): void {
  }

}
