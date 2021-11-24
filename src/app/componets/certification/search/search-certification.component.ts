import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  @Input() selectedCertification: Certification;
  @Output() onCertificationSelected = new EventEmitter<Certification>();

  certificationKeyWord: String;
  student: Student = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  certificationList: Certification[];
  isLoading: Boolean = false;

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  onKeyup(event) {
    if(this.certificationKeyWord.length >=3){
      this.search();
    }else{
      this.certificationList =[];
    }
  }

  async search():Promise<void>{
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchCertification(this.certificationKeyWord);
    this.certificationList = result;
    this.isLoading = false;
  }

  selected(certification:Certification){
    this.selectedCertification = certification;
    this.onCertificationSelected.emit(certification);
  }

  async addCertification(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let newCertification:Certification  = await user.functions.addCertification(this.certificationKeyWord);
    this.onCertificationSelected.emit(newCertification);
    this.certificationKeyWord = '';
    this.isLoading = false;
  }

  remove(){
    this.selectedCertification = undefined;
    this.onCertificationSelected.emit(undefined);
  }

}
