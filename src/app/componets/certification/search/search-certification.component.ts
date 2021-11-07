import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import * as Realm from "realm-web";
import { Certification } from '../../model/certification';

@Component({
  selector: 'search-certification',
  templateUrl: './search-certification.component.html',
  styleUrls: ['./search-certification.component.scss']
})
export class SearchCertificationComponent implements OnInit {

  @Output() onCertificationSelected = new EventEmitter<Certification>();

  certificationKeyWord: String;
  student: Student = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  certificationList: Certification[];

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(this.certificationKeyWord.length >=3){
      this.search(this.certificationKeyWord);
    }else{
      this.certificationList =[];
    }
  }

  async search(keyword):Promise<void>{
    console.log(`Searching for ${keyword}`);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchCertification(this.certificationKeyWord);
    this.certificationList = result;
    console.log(result);
  }

  selected(certification:Certification){
    this.onCertificationSelected.emit(certification);
  }

}
