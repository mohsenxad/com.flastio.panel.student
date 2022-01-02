import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Major } from '../../../model/major';
import { MajorService } from 'src/app/services/major/major.service';

@Component({
  selector: 'search-major',
  templateUrl: './search-major.component.html',
  styleUrls: ['./search-major.component.scss']
})
export class SearchMajorComponent implements OnInit {

  @Input() selectedMajor:Major;
  @Output() onMajorSelected = new EventEmitter<Major>();

  majorKeyWord: String;
  majorList: Major[];
  isLoading:Boolean = false;

  keywordMinCharLengthToSearch:Number = 3;

  constructor(
    private majorService:MajorService
  ){}


  ngOnInit(): void {
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.majorList &&
      this.majorKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.majorKeyWord,this.majorList)
    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(courseKeyWord: String,majorList:Major[]):Boolean{
    let result: Boolean = false;
    let foundMajorWithName = majorList.find((currentMajor:Major) => {
      if(currentMajor.name.trim().toLowerCase() == courseKeyWord.trim().toLowerCase()){
        return currentMajor
      }
    })

    if(foundMajorWithName){
      result = true;
    }

    return result;
  }

  onKeyup(event) {
    console.log(event);
    if(
      this.majorKeyWord &&
      this.majorKeyWord.length >= this.keywordMinCharLengthToSearch
    ){
      this.search(this.majorKeyWord);
    }else{
      this.majorList =[];
    }
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    this.majorList  = await this.majorService.search(keyword);
    this.isLoading = false;
  }

  async addMajor(){
    this.isLoading = true;
    let newMajor:Major  = await this.majorService.add(this.majorKeyWord);
    this.selectedMajor = newMajor;
    this.onMajorSelected.emit(newMajor);
    this.majorKeyWord = '';
    this.majorList = [];
    this.isLoading = false;
  }

  selected(major:Major){
    this.selectedMajor = major;
    this.onMajorSelected.emit(major);
    this.majorKeyWord = '';
    this.majorList = [];
  }

  remove(){
    this.selectedMajor = undefined;
    this.onMajorSelected.emit(undefined);
  }

}
