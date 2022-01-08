import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Certification } from '../../../model/certification';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'search-certification',
  templateUrl: './search-certification.component.html',
  styleUrls: ['./search-certification.component.scss']
})
export class SearchCertificationComponent implements OnInit {
  
  @Input() selectedCertification: Certification;
  @Output() onCertificationSelected = new EventEmitter<Certification>();

  certificationKeyWord: String;
  certificationList: Certification[];
  isLoading: Boolean = false;

  keywordMinCharLengthToSearch: Number = 3;

  constructor(
    private certificationService: CertificationService
  ) {}

  ngOnInit(): void {
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.certificationList &&
      this.certificationKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.certificationKeyWord, this.certificationList)
    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(certificationKeyWord: String,certificationList:Certification[]):Boolean{
    let result: Boolean = false;
    let foundCertificatioinWithName = certificationList.find((currentCertification:Certification) => {
      if(currentCertification.name.trim().toLowerCase() == certificationKeyWord.trim().toLowerCase()){
        return currentCertification
      }
    })

    if(foundCertificatioinWithName){
      result = true;
    }

    return result;
  }

  onKeyup(event) {
    console.log(event);
    if(
      event.code == "Enter" &&
      this.isAddable()
    ){
      this.addCertification();
    }
  }

  changed(value){
    console.log(value);
    
    if(
      this.certificationKeyWord.length >= this.keywordMinCharLengthToSearch
    ){
      this.search();
    }else{
      this.certificationList = [];
    }
  }

  async search():Promise<void>{
    this.isLoading = true;
    this.certificationList = await this.certificationService.search(this.certificationKeyWord);
    this.isLoading = false;
  }

  selected(certification:Certification){
    this.selectedCertification = certification;
    this.onCertificationSelected.emit(certification);
    this.certificationKeyWord = '';
    this.certificationList = [];
  }

  async addCertification(){
    this.isLoading = true;
    let newCertification:Certification  = await this.certificationService.addCertification(this.certificationKeyWord);
    this.selectedCertification = newCertification;
    this.onCertificationSelected.emit(newCertification);
    this.certificationKeyWord = '';
    this.certificationList = [];
    this.isLoading = false;
  }

  remove(){
    console.log('here to remove');
    
    this.selectedCertification = undefined;
    this.onCertificationSelected.emit(this.selectedCertification);
  }

}
