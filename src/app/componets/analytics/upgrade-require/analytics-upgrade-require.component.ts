import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'analytics-upgrade-require',
  templateUrl: './analytics-upgrade-require.component.html',
  styleUrls: ['./analytics-upgrade-require.component.scss']
})
export class AnalyticsUpgradeRequireComponent implements OnInit {

  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit();
  }

}
