import { Component, Input, OnInit } from '@angular/core';
import { AssignedCertification } from '../../model/assignedCertification';


@Component({
  selector: 'certification-panel',
  templateUrl: './certification-panel.component.html',
  styleUrls: ['./certification-panel.component.scss']
})
export class CertificationPanelComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];

  isAddCertificationModalVisible:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAddCertificationModal(){
    console.log('show');
    
    this.isAddCertificationModalVisible = true;
  }

  hideAddCertificationModal(){
    console.log('hide');
    
    this.isAddCertificationModalVisible = false;
  }

}
