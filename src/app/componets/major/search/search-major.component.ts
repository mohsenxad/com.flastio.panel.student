import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Major } from '../../model/major';
import * as Realm from "realm-web";

@Component({
  selector: 'search-major',
  templateUrl: './search-major.component.html',
  styleUrls: ['./search-major.component.scss']
})
export class SearchMajorComponent implements OnInit {

  @Input() selectedMajor:Major;
  @Output() onMajorSelected = new EventEmitter<Major>();

  majorKeyWord: String;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  majorList: Major[];
  isLoading:Boolean = false;

  constructor(){}


  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(this.majorKeyWord.length >=3){
      this.search(this.majorKeyWord);
    }else{
      this.majorList =[];
    }
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchMajor(keyword);
    this.majorList = result;
    this.isLoading = false;
  }

  async addMajor(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result: any = await user.functions.addMajor(this.majorKeyWord);
    let newMajor:Major  = {
      _id: result.insertedId.toString(),
      name:this.majorKeyWord,
    }
    this.majorKeyWord = '';
    this.selectedMajor = newMajor;
    this.onMajorSelected.emit(newMajor);
    this.isLoading = false;
  }

  selected(major:Major){
    this.selectedMajor = major;
    this.onMajorSelected.emit(major);
  }

  remove(){
    this.selectedMajor = undefined;
    this.onMajorSelected.emit(undefined);
  }

}
