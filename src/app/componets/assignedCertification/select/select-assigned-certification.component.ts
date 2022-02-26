import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { AssignedCertificationService } from 'src/app/services/assignedCertification/assigned-certification.service';

@Component({
  selector: 'select-assigned-certification',
  templateUrl: './select-assigned-certification.component.html',
  styleUrls: ['./select-assigned-certification.component.scss']
})
export class SelectAssignedCertificationComponent implements OnInit {

  assignedCertificationList: AssignedCertification[];
  @Input() selectedAssignedCertification:AssignedCertification;
  @Output() onAssignedCertificationSelected = new EventEmitter<AssignedCertification>();

  selectedAssignedCertificationId:String;
  isLoading: Boolean = false;

  constructor(
    private assignedCertificationService: AssignedCertificationService
  ) { }

  ngOnInit(): void {
    this.getAssignedCertificationList();
  }

  changeAssingedCertification(){
    if(this.selectedAssignedCertificationId){
      this.selectedAssignedCertification = this.assignedCertificationList.find((currentAssignedCertification)=>{
        if(this.selectedAssignedCertificationId.toString() == currentAssignedCertification._id.toString()){
          return currentAssignedCertification;
        }
      })
    }
    this.onAssignedCertificationSelected.emit(this.selectedAssignedCertification);
  }

  async getAssignedCertificationList(){
    this.isLoading = true;
    this.assignedCertificationList  = await this.assignedCertificationService.getAll();
    this.isLoading = false;
  }
}
