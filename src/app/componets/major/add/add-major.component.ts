import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Major } from '../../model/major';

import * as Realm from "realm-web";

@Component({
  selector: 'add-major',
  templateUrl: './add-major.component.html',
  styleUrls: ['./add-major.component.scss']
})
export class AddMajorComponent implements OnInit {

  @Output() onMajorSelected = new EventEmitter<Major>();
  
  major: Major = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor(
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addMajor(this.major.name);
    this.major._id = result.insertedId.toString();
    this.onMajorSelected.emit(this.major);
  }

}
