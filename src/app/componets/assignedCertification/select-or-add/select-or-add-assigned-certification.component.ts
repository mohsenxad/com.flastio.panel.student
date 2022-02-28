import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';

@Component({
  selector: 'select-or-add-assigned-certification',
  templateUrl: './select-or-add-assigned-certification.component.html',
  styleUrls: ['./select-or-add-assigned-certification.component.scss']
})
export class SelectOrAddAssignedCertificationComponent implements OnInit {
  
  @Input() assignedCertification: AssignedCertification
  @Output() onAssignedCertificationAdded = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  
  constructor() { }

  actionType:String = 'Existing';

  ngOnInit(): void {}

  changed(actionType: String):void{
    this.actionType = actionType
  }

  setAssignedCertification(assignedCertification: AssignedCertification): void{
    this.assignedCertification = assignedCertification;
  }

  setAssignedCertificationAndSave(assignedCertification: AssignedCertification): void{
    this.assignedCertification = assignedCertification;
    this.save();
  }

  save(){
    this.onAssignedCertificationAdded.emit(this.assignedCertification);
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

  remove(){
    this.assignedCertification = undefined;
    this.onAssignedCertificationAdded.emit(this.assignedCertification);
  }

}
