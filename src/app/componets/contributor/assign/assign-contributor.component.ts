import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'assign-contributor',
  templateUrl: './assign-contributor.component.html',
  styleUrls: ['./assign-contributor.component.scss']
})
export class AssignContributorComponent implements OnInit {

  
  @Input() contributorList: Contributor[] = [];
  @Output() onContributorListUpdated = new EventEmitter<Contributor[]>();
  @Output() onClose = new EventEmitter();

  contributor:Contributor = {};

  constructor() { }

  

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit();
  }

  cancel(){
    this.onContributorListUpdated.emit([]);
    this.onClose.emit();
  }

  add(){
    this.contributorList.push(this.contributor);
  }

  save(){
    this.onContributorListUpdated.emit(this.contributorList);
    this.onClose.emit();
  }
}


