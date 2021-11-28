import { Component, Input, OnInit } from '@angular/core';
import { SupportingFile } from '../../model/supportingFile';

@Component({
  selector: 'supporting-file-list',
  templateUrl: './supporting-file-list.component.html',
  styleUrls: ['./supporting-file-list.component.scss']
})
export class SupportingFileListComponent implements OnInit {
  @Input() supportingFileList: SupportingFile[];
  constructor() { }

  ngOnInit(): void {
  }

}
