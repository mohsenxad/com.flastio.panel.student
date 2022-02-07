import { Component, Input, OnInit } from '@angular/core';
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
  isLoading: Boolean = false;

  constructor(
    private assignedCertificationService: AssignedCertificationService
  ) { }

  ngOnInit(): void {
    this.getAssignedCertificationList();
  }

  changeAssingedCertification(){
    
  }

  async getAssignedCertificationList(){
    this.isLoading = true;
    this.assignedCertificationList  = await this.assignedCertificationService.getAll();
    this.isLoading = false;
  }
}
