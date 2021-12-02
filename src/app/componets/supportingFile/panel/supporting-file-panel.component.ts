import { Component, Input, OnInit } from '@angular/core';
import { SupportingFile } from '../../../model/supportingFile';

@Component({
  selector: 'supporting-file-panel',
  templateUrl: './supporting-file-panel.component.html',
  styleUrls: ['./supporting-file-panel.component.scss']
})
export class SupportingFilePanelComponent implements OnInit {
  @Input() supportingFileList: SupportingFile[];
  constructor() { }

  ngOnInit(): void {
  }

}
