import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {

  @Input() selectedCompany:Company;
  @Output() onCompanySelected = new EventEmitter<Company>();

  companyKeyWord: String;
  companyList: Company[];
  isLoading:Boolean = false;

  keywordMinCharLengthToSearch:Number = 3;

  constructor(
    private companyService:CompanyService
  ){}


  ngOnInit(): void {
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.companyList &&
      this.companyKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.companyKeyWord, this.companyList)
    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(companyKeyWord: String,companyList:Company[]):Boolean{
    let result: Boolean = false;
    let foundCompanyWithName = companyList.find((currentCompany:Company) => {
      if(currentCompany.name.trim().toLowerCase() == companyKeyWord.trim().toLowerCase()){
        return currentCompany
      }
    })

    if(foundCompanyWithName){
      result = true;
    }

    
    return result;
  }

  onKeyup(event) {
    console.log(event);
    if(
      this.companyKeyWord &&
      this.companyKeyWord.length >= this.keywordMinCharLengthToSearch
    ){
      this.search(this.companyKeyWord);
    }else{
      this.companyList =[];
    }
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    this.companyList  = await this.companyService.search(keyword);
    this.isLoading = false;
  }

  async addCompany(){
    this.isLoading = true;
    let newCompanyr:Company  = await this.companyService.add(this.companyKeyWord);
    this.selectedCompany = newCompanyr;
    this.onCompanySelected.emit(newCompanyr);
    this.companyKeyWord = '';
    this.companyList = [];
    this.isLoading = false;
  }

  selected(company:Company){
    this.selectedCompany = company;
    this.onCompanySelected.emit(company);
    this.companyKeyWord = '';
    this.companyList = [];
  }

  remove(){
    this.selectedCompany = undefined;
    this.onCompanySelected.emit(undefined);
  }

}
