import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empty-certification',
  templateUrl: './empty-certification.component.html',
  styleUrls: ['./empty-certification.component.scss']
})
export class EmptyCertificationComponent implements OnInit {
  @Output() onAddCertificationClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addCertification(){
    this.onAddCertificationClicked.emit();
  }

}
