import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from '../../model/contributor';

@Component({
  selector: 'contributor-list-item',
  templateUrl: './contributor-list-item.component.html',
  styleUrls: ['./contributor-list-item.component.scss']
})
export class ContributorListItemComponent implements OnInit {

  @Input() contributor:Contributor;
  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    
  }

}
