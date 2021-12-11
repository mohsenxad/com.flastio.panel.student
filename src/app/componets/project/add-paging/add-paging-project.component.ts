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
    'Attachment',
    'Links',
    'Certification',
    'Team',
  ];

  constructor() { }

  ngOnInit(): void {

  }

  hadItem(pageTitle:String):Boolean{
    if(
      pageTitle == 'Attachment' &&
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
      pageTitle == 'Team' &&
      this.hadTeam
    ){
      return true;
    }else{
      return false;
    }
  }

  changePageTitle(pageTitle:String){
    console.log('asdfa');
    
    this.onPageTitleSelected.emit(pageTitle);
  }
}
