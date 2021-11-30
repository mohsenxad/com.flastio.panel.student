import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from '../../model/contributor';

@Component({
  selector: 'contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss']
})
export class ContributorListComponent implements OnInit {

  @Input() contributorList:Contributor[];
  constructor() { }

  ngOnInit(): void {
  }

}
