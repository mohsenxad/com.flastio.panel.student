import { Component, Input, OnInit } from '@angular/core';
import { AssignedCertification } from '../../../model/assignedCertification';

@Component({
  selector: 'certification-list-item',
  templateUrl: './certification-list-item.component.html',
  styleUrls: ['./certification-list-item.component.scss']
})
export class CertificationListItemComponent implements OnInit {

  @Input() assignedCertification: AssignedCertification;

  constructor() { }

  ngOnInit(): void {
  }

}
