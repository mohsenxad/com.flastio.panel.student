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
  isLoading: Boolean = false;

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
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addSchool(this.schoolKeyWord);
    let newSchool:School = {
      _id: result.insertedId.toString(),
      name: this.schoolKeyWord,
    }
    this.schoolKeyWord = '';
    this.onSchoolSelected.emit(newSchool);
    this.isLoading = false;
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    this.schoolList = await user.functions.searchSchool(keyword);
    this.isLoading = false;
  }

  selected(school:School){
    this.onSchoolSelected.emit(school);
  }

}
