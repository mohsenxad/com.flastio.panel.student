import { Component, Input, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { AssignedCertification } from '../../../model/assignedCertification';


@Component({
  selector: 'certification-panel',
  templateUrl: './certification-panel.component.html',
  styleUrls: ['./certification-panel.component.scss']
})
export class CertificationPanelComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];

  isAddCertificationModalVisible:Boolean = false;
  isConfirmRemoveModalVisible:Boolean = false;
  markAsDeleteSssignedCertification :AssignedCertification;

  constructor(
    private certificationService: CertificationService
  ) { }

  ngOnInit(): void {
  }

  showAddCertificationModal(){
    this.isAddCertificationModalVisible = true;
  }

  hideAddCertificationModal(){
    this.isAddCertificationModalVisible = false;
  }

  showConfrimDeleteModal(){
    this.isConfirmRemoveModalVisible = true;
  }

  hideConfrimDeleteModal(){
    this.markAsDeleteSssignedCertification = undefined;
    this.isConfirmRemoveModalVisible = false;
  }

  addNewAssignedCertification(assignedCertification:AssignedCertification){
    if(!this.assignedCertificationList){
      this.assignedCertificationList = [];
    }
    this.assignedCertificationList.push(assignedCertification);
  }

  edit(assignedCertification: AssignedCertification){
    console.log('edit project');
  }

  async delete(assignedCertification: AssignedCertification){
    this.markAsDeleteSssignedCertification = assignedCertification;
    this.showConfrimDeleteModal();
  }

  async confirmedDelete(){
    await this.certificationService.remove(this.markAsDeleteSssignedCertification);
    this.assignedCertificationList = this.assignedCertificationList.filter((currentAssignedCertification: AssignedCertification)=>{
      if(currentAssignedCertification._id.toString()!= this.markAsDeleteSssignedCertification._id.toString()){
        return currentAssignedCertification;
      }
    });
    this.hideConfrimDeleteModal();
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
