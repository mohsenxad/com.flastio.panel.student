import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Realm from "realm-web";
import { ProjectService } from 'src/app/services/project/project.service';
import { SupportingFile } from '../../model/supportingFile';

@Component({
  selector: 'assign-supporting-file-project',
  templateUrl: './assign-supporting-file-project.component.html',
  styleUrls: ['./assign-supporting-file-project.component.scss']
})
export class AssignSupportingFileProjectComponent implements OnInit {

  @Input() supportingFileList: SupportingFile[] = [];
  @Output() onSupportingFileListUpdated = new EventEmitter<SupportingFile[]>();
  
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  fileUrl: String;

  constructor(
    private projectService:ProjectService
  ) { }

  ngOnInit(): void {
  }

  async handleFileInput(files: FileList) {
    let currentSupportingFile:File = files.item(0);
    let response:any = await this.getUploadUrl()
    let uniqFileName = response.fileName.toString();
    let signedUploadUr = response.presignedUrl;
    const newSupportingFile: SupportingFile = {
      _id: uniqFileName,
      title: currentSupportingFile.name,
      size: currentSupportingFile.size,
      isUploadComeplete: false,
      file: currentSupportingFile,
    };
    this.supportingFileList.push(newSupportingFile);
    this.uploadFile(newSupportingFile, signedUploadUr)
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getProjectSupportingFileUploadUrl({Bucket:"flastio"})
    return result;
  }

  uploadFile(supportingFile:SupportingFile, uploadPresignUrl: string){
    const contentType = supportingFile.file.type;
    this.projectService.upload(uploadPresignUrl,supportingFile.file, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        this.fileUploadCompelete(supportingFile._id);
      });
  }

  fileUploadCompelete(fileId: String){
    let foundSupportingFile : SupportingFile =this.supportingFileList.find((supportingFile:SupportingFile)=>{
      if(supportingFile._id.toString() == fileId){
        return supportingFile;
      }
    })
    if(foundSupportingFile){
      foundSupportingFile.isUploadComeplete = true;
    }
  }

  save(){
    this.onSupportingFileListUpdated.emit(this.supportingFileList);
  }

  close(){

  }

}
