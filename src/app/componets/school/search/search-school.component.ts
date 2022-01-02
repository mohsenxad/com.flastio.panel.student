import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { School } from '../../../model/school';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'search-school',
  templateUrl: './search-school.component.html',
  styleUrls: ['./search-school.component.scss']
})
export class SearchSchoolComponent implements OnInit {

  @Input() selectedSchool: School;
  @Output() onSchoolSelected = new EventEmitter<School>();

  schoolKeyWord: String;
  schoolList: School[];
  
  isLoading: Boolean = false;
  keywordMinCharLengthToSearch:Number = 3;

  constructor(
    private schoolService: SchoolService
  ) {}


  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(this.schoolKeyWord.length >= this.keywordMinCharLengthToSearch ){
      this.search(this.schoolKeyWord);
    }else{
      this.schoolList =[];
    }
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.schoolList &&
      this.schoolKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.schoolKeyWord, this.schoolList)
    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(schoolKeyWord: String,schoolList:School[]):Boolean{
    let result: Boolean = false;
    let foundSchoolWithName = schoolList.find((currentSchool:School) => {
      if(currentSchool.name.trim().toLowerCase() == schoolKeyWord.trim().toLowerCase()){
        return currentSchool
      }
    })

    if(foundSchoolWithName){
      result = true;
    }

    return result;
  }

  async addSchool(){
    this.isLoading = true;
    let result:any  = await this.schoolService.add(this.schoolKeyWord);
    let newSchool:School = {
      _id: result.insertedId.toString(),
      name: this.schoolKeyWord,
    }
    this.schoolKeyWord = '';
    this.onSchoolSelected.emit(newSchool);
    this.isLoading = false;
  }

  async search(keyword:String):Promise<void>{
    this.isLoading = true;
    this.schoolList = await this.schoolService.search(keyword);
    this.isLoading = false;
  }

  selected(school:School){
    this.selectedSchool = school;
    this.onSchoolSelected.emit(school);
    this.schoolList = [];
    this.schoolKeyWord = '';
  }

  remove(){
    this.selectedSchool = undefined;
    this.onSchoolSelected.emit(undefined);
  }

}
