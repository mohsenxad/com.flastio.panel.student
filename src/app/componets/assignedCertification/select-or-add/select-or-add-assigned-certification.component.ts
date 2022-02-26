import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-or-add-assigned-certification',
  templateUrl: './select-or-add-assigned-certification.component.html',
  styleUrls: ['./select-or-add-assigned-certification.component.scss']
})
export class SelectOrAddAssignedCertificationComponent implements OnInit {

  constructor() { }

  actionType:String = 'Existing';

  ngOnInit(): void {
  }

  changed(actionType: String):void{
    this.actionType = actionType
  }

}
