import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { School } from '../../model/school';
import { Student } from '../../model/student';
import * as Realm from "realm-web";

@Component({
  selector: 'search-school',
  templateUrl: './search-school.component.html',
  styleUrls: ['./search-school.component.scss']
})
export class SearchSchoolComponent implements OnInit {

  @Output() onSchoolSelected = new EventEmitter<School>();

  schoolKeyWord: String;
  student: Student = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  schoolList: School[];

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }


  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(this.schoolKeyWord.length >=3){
      this.search(this.schoolKeyWord);
    }else{
      this.schoolList =[];
    }
  }

  async addSchool(){
    const user: Realm.User = this.app.currentUser;
    let newSchool:School  = await user.functions.addSchool(this.schoolKeyWord);
    this.schoolKeyWord = '';
    this.onSchoolSelected.emit(newSchool);
  }

  async search(keyword):Promise<void>{
    console.log(`Searching for ${keyword}`);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchSchool(keyword);
    this.schoolList = result;
    console.log(result);
  }

  selected(school:School){
    this.onSchoolSelected.emit(school);
  }

}
