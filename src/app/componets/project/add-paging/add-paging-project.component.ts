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
    'Attachment',
    'Links',
    'Certification',
    'Team',
  ];

  constructor() { }

  ngOnInit(): void {

  }

  changePageTitle(pageTitle:String){
    console.log('asdfa');
    
    this.onPageTitleSelected.emit(pageTitle);
  }
}
