import { Component, Input, OnInit } from '@angular/core';
import { AssignedCertification } from '../../../model/assignedCertification';

@Component({
  selector: 'certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
