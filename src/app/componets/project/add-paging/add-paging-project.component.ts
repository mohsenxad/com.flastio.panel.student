import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-paging-project',
  templateUrl: './add-paging-project.component.html',
  styleUrls: ['./add-paging-project.component.scss']
})
export class AddPagingProjectComponent implements OnInit {
  @Input() selectedPageTitle:String;
  @Output() onPageTitleSelected = new EventEmitter<String>();

  pageTitleList:String[] = [
    'General',
    'Attachment',
    'Links',
    'Team',
  ];

  constructor() { }

  ngOnInit(): void {
    if(!this.selectedPageTitle){
      this.selectedPageTitle = this.pageTitleList[0];
      this.changePageTitle(this.selectedPageTitle);
    }
  }

  changePageTitle(pageTitle:String){
    this.onPageTitleSelected.emit(pageTitle);
  }
}
