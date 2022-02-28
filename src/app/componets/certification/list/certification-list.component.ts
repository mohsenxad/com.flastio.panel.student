import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { AssignedCertification } from '../../../model/assignedCertification';

@Component({
  selector: 'certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {

  @Input() assignedCertificationList: AssignedCertification[];
  @Input() isActionable:Boolean;
  @Output() onEdit = new EventEmitter<AssignedCertification>();
  @Output() onDelete = new EventEmitter<AssignedCertification>();
  @Output() onChangeIndex = new EventEmitter<any>();
  
  constructor(){ }

  ngOnInit(): void {
  }

  edit(assignedCertification: AssignedCertification){
    this.onEdit.emit(assignedCertification);
  }

  delete(assignedCertification: AssignedCertification){
    this.onDelete.emit(assignedCertification);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
