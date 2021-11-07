import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Major } from '../../model/major';
import * as Realm from "realm-web";

@Component({
  selector: 'search-major',
  templateUrl: './search-major.component.html',
  styleUrls: ['./search-major.component.scss']
})
export class SearchMajorComponent implements OnInit {
  @Output() onMajorSelected = new EventEmitter<Major>();

  majorKeyWord: String;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  majorList: Major[];

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
    console.log(`Searching for ${keyword}`);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchMajor(keyword);
    this.majorList = result;
  }

  selected(major:Major){
    this.onMajorSelected.emit(major);
  }

}
