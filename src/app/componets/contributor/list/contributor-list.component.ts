import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss']
})
export class ContributorListComponent implements OnInit {

  @Input() contributorList:Contributor[];
  @Output() onDeleted = new EventEmitter<Contributor>();


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(contributor: Contributor){
    this.onDeleted.emit(contributor);
  }

}
