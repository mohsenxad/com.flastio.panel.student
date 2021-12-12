import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { LocalStorageService } from '../localStorage/local-storage.service';
import * as Realm from "realm-web";
import { Certification } from 'src/app/model/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  studentId :String;
  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){
    this.studentId = this.localStorageService.getStudent()._id;
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getCertificationUploadUrl({Bucket:"flastio"})
    return result;
  }

  upload( url: String, file:any, contentType: String): any{
    let body: any =file;
    var headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url.toString(),body, {headers});
  }


  async save(assignedCertification: AssignedCertification):Promise<AssignedCertification>{
    const user: Realm.User = this.app.currentUser;
    let result:AssignedCertification  = await user.functions
      .assignCertification(
        this.studentId,
        assignedCertification.certification,
        assignedCertification.issuedDateYear,
        assignedCertification.issuedDateMonth,
        assignedCertification.fileName,
        assignedCertification.fileUrl
      );
    return result;
  }

  async remove(assignedCertification: AssignedCertification):Promise<any>{
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions
      .removeCertification(
        this.studentId,
        assignedCertification._id.toString()
      );
    return result;
  }

  async search(certificationKeyWord: String):Promise<Certification[]>{
    const user: Realm.User = this.app.currentUser;
    let certificationList: Certification[]  = await user.functions.searchCertification(certificationKeyWord);
    return certificationList;
  }

  async addCertification(name: String):Promise<Certification>{
    const user: Realm.User = this.app.currentUser;
    let newCertification:Certification  = await user.functions.addCertification(name);
    return newCertification;
  }
}
