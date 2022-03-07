import { Injectable } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { AwsService } from '../aws/aws.service';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class AssignedCertificationService {
 
  constructor(
    private realmService: RealmService,
    private awsService: AwsService,
  ) {}

  async getUploadUrl(){
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getCertificationUploadUrl",
      bucket
    );
    return result;
  }

  async upload( url: String, file:any, contentType: String): Promise<any>{
    return this.awsService.upload(url, file, contentType);
  }

  async getAll():Promise<AssignedCertification[]>{
    const result:AssignedCertification[]  = await this.realmService.callFunction(
      "getAllAssignedCertification"
    );
    return result;
  }

  async save(assignedCertification: AssignedCertification):Promise<AssignedCertification>{
    const result:AssignedCertification  = await this.realmService.callFunction(
      "assignCertification",
      assignedCertification.certification,
      assignedCertification.issuedDateYear,
      assignedCertification.issuedDateMonth,
      assignedCertification.organization,
      assignedCertification.fileName,
      assignedCertification.fileUrl
    );
    return result;
  }

  async edit(assignedCertification: AssignedCertification):Promise<AssignedCertification>{
    const result:AssignedCertification  = await this.realmService.callFunction(
      "editAssignCertification",
      assignedCertification._id.toString(),
      assignedCertification.certification,
      assignedCertification.issuedDateYear,
      assignedCertification.issuedDateMonth,
      assignedCertification.organization,
      assignedCertification.fileName,
      assignedCertification.fileUrl
    );
    return result;
  }

  async remove(assignedCertification: AssignedCertification):Promise<any>{
    const result:any  = await this.realmService.callFunction(
      "removeCertification",
      assignedCertification._id.toString()
    );
    return result;
  }

}
