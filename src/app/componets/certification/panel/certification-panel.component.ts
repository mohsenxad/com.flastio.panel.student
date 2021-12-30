import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { AssignedCertification } from '../../../model/assignedCertification';


@Component({
  selector: 'certification-panel',
  templateUrl: './certification-panel.component.html',
  styleUrls: ['./certification-panel.component.scss']
})
export class CertificationPanelComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];
  @Output() onUpdated = new EventEmitter();

  isAddCertificationModalVisible:Boolean = false;
  isEditCertificationModalVisible:Boolean = false;
  isConfirmRemoveModalVisible:Boolean = false;
  markAsDeleteSssignedCertification :AssignedCertification;
  markAsEditAssignedCertification :AssignedCertification;

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

  showEditCertificationModal(){
    this.isEditCertificationModalVisible = true;
  }

  hideEditCertificationModal(){
    this.isEditCertificationModalVisible = false;
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
    this.onUpdated.emit();
  }

  editedAssignedCertification(assignedCertification:AssignedCertification){
    this.assignedCertificationList.forEach((currentAssignedCertification:AssignedCertification)=>{
      if(currentAssignedCertification._id.toString() == assignedCertification._id.toString()){
        currentAssignedCertification.certification = assignedCertification.certification;
        currentAssignedCertification.issuedDateMonth = assignedCertification.issuedDateMonth;
        currentAssignedCertification.issuedDateYear = assignedCertification.issuedDateYear;
        currentAssignedCertification.fileUrl = assignedCertification.fileUrl;
        this.onUpdated.emit();
      }
    })
  }

  edit(assignedCertification: AssignedCertification){
    this.markAsEditAssignedCertification = Object.assign({},assignedCertification);
    this.showEditCertificationModal();
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
    this.onUpdated.emit();
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
