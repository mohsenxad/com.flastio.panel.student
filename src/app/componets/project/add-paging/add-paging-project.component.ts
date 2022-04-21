import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-paging-project',
  templateUrl: './add-paging-project.component.html',
  styleUrls: ['./add-paging-project.component.scss']
})
export class AddPagingProjectComponent implements OnInit {
  @Input() selectedPageTitle:String;
  @Input() hadAttachment:Boolean;
  @Input() hadLinks:Boolean;
  @Input() hadCertification:Boolean;
  @Input() hadTeam:Boolean;
  @Output() onPageTitleSelected = new EventEmitter<String>();


  pageTitleList:String[] = [
    'Supporting files',
    'Links',
    'Certification',
    'Add contributors',
  ];

  constructor() { }

  ngOnInit(): void {

  }

  hadItem(pageTitle:String):Boolean{
    if(
      pageTitle == 'Supporting files' &&
      this.hadAttachment
    ){
      return true;
    }else if(
      pageTitle == 'Links' &&
      this.hadLinks
    ){
      return true;
    }else if(
      pageTitle == 'Certification' &&
      this.hadCertification
    ){
      return true;
    }else if(
      pageTitle == 'Add contributors' &&
      this.hadTeam
    ){
      return true;
    }else{
      return false;
    }
  }

  changePageTitle(pageTitle:String){
    this.onPageTitleSelected.emit(pageTitle);
  }
}
