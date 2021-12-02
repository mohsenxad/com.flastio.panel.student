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

  constructor(
    private certificationService: CertificationService
  ) {}

  ngOnInit(): void {
  }

  onKeyup(event) {
    if(this.certificationKeyWord.length >=3){
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
  }

  async addCertification(){
    this.isLoading = true;
    let newCertification:Certification  = await this.certificationService.addCertification(this.certificationKeyWord);
    this.selectedCertification = newCertification;
    this.onCertificationSelected.emit(newCertification);
    this.certificationKeyWord = '';
    this.isLoading = false;
  }

  remove(){
    this.selectedCertification = undefined;
    this.onCertificationSelected.emit(undefined);
  }

}
