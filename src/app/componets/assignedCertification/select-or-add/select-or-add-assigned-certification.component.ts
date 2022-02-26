import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';

@Component({
  selector: 'select-or-add-assigned-certification',
  templateUrl: './select-or-add-assigned-certification.component.html',
  styleUrls: ['./select-or-add-assigned-certification.component.scss']
})
export class SelectOrAddAssignedCertificationComponent implements OnInit {

  @Output() onAssignedCertificationAdded = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  assignedCertification: AssignedCertification
  
  constructor() { }

  actionType:String = 'Existing';

  ngOnInit(): void {
  }

  changed(actionType: String):void{
    this.actionType = actionType
  }

  setAssignedCertification(assignedCertification: AssignedCertification): void{
    console.log(assignedCertification);
    this.assignedCertification = assignedCertification;
  }

  save(){
    this.onAssignedCertificationAdded.emit(this.assignedCertification);
  }

  close(){
    this.onClose.emit();
  }

}
