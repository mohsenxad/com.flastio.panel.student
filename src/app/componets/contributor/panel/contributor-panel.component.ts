import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'contributor-panel',
  templateUrl: './contributor-panel.component.html',
  styleUrls: ['./contributor-panel.component.scss']
})
export class ContributorPanelComponent implements OnInit {

  @Input() contributorList:Contributor[];
  constructor() { }

  ngOnInit(): void {
  }

}
