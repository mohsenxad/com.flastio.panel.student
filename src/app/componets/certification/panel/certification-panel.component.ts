import { Component, Input, OnInit } from '@angular/core';
import { AssignedCertification } from '../../model/assignedCertification';


@Component({
  selector: 'certification-panel',
  templateUrl: './certification-panel.component.html',
  styleUrls: ['./certification-panel.component.scss']
})
export class CertificationPanelComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];

  constructor() { }

  ngOnInit(): void {
  }

}