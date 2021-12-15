import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from '../../../model/assignedCertification';

@Component({
  selector: 'certification-list-item',
  templateUrl: './certification-list-item.component.html',
  styleUrls: ['./certification-list-item.component.scss']
})
export class CertificationListItemComponent implements OnInit {

  @Input() assignedCertification: AssignedCertification;
  @Output() onEdit = new EventEmitter<AssignedCertification>();
  @Output() onDelete = new EventEmitter<AssignedCertification>();
  @Output() onChangeIndex = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit.emit(this.assignedCertification)
  }

  delete(){
    this.onDelete.emit(this.assignedCertification);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
