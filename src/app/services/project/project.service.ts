import { Injectable } from '@angular/core';
import { Project } from 'src/app/model/project';
import { AwsService } from '../aws/aws.service';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private realmService: RealmService,
    private awsService: AwsService,
  ){
  }

  async upload( url: String, file:any, contentType: String): Promise<any>{
    return this.awsService.upload(url, file,contentType);
  }

  async getUploadUrl():Promise<any>{
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getProjectSupportingFileUploadUrl",
      bucket
    )
    return result;
  }

  async getProjectUploadUrl():Promise<any>{
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getProjectUploadUrl",
      bucket
    )
    return result;
  }

  async add(project: Project): Promise<Project>{
    const result: Project  = await this.realmService.callFunction(
      "addProject",
      project.baseInfo,
      project.isPublished,
      project.linkUrlList,
      project.supportingFileList,
      project.contributorList,
      project.assignedCertification,
      project.role
    );
    return result;
  }

  
  
  async edit(project: Project): Promise<Project>{
    const result: Project  = await this.realmService.callFunction(
      "editProject",
      project._id.toString(),
      project.baseInfo || undefined,
      project.isPublished|| undefined,
      project.linkUrlList|| undefined,
      project.supportingFileList|| undefined,
      project.contributorList|| undefined,
      project.assignedCertification|| undefined,
      project.role|| undefined,
    );
    return result;
  }

  async remove(project: Project):Promise<any>{
    const result:any  = await this.realmService.callFunction(
        "removeProject",
        project._id.toString()
      );
    return result;
  }
}
