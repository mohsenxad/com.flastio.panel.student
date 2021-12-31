import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { SupportingFile } from '../../../model/supportingFile';

@Component({
  selector: 'assign-supporting-file-project',
  templateUrl: './assign-supporting-file-project.component.html',
  styleUrls: ['./assign-supporting-file-project.component.scss']
})
export class AssignSupportingFileProjectComponent implements OnInit {

  @Input() supportingFileList: SupportingFile[] = [];
  @Output() onSupportingFileListUpdated = new EventEmitter<SupportingFile[]>();
  @Output() onClose = new EventEmitter();


  fileUrl: String;
  isLoading: Boolean = false;

  constructor(
    private projectService:ProjectService
  ) { }

  ngOnInit(): void {
  }

  setDropable(){
    console.log('statr dropable');
    
    let dropContainer = document.getElementById("divSupportingFileSelector");

    dropContainer.ondragover = dropContainer.ondragenter = (evt) => {
      evt.preventDefault();
    };

    dropContainer.ondrop = (evt) => {
      this.handleFileInput(evt.dataTransfer.files)
      evt.preventDefault();
    };
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    let currentSupportingFile:File = files.item(0);
    let response:any = await this.projectService.getUploadUrl()
    let uniqFileName = response.fileName.toString();
    let signedUploadUrl: String = response.presignedUrl;
    let fileUrl = signedUploadUrl.split('?')[0];
    const newSupportingFile: SupportingFile = {
      _id: uniqFileName,
      title: currentSupportingFile.name,
      size: currentSupportingFile.size,
      isUploadComeplete: false,
      file: currentSupportingFile,
      remoteUrl:fileUrl
    };
    this.supportingFileList.push(newSupportingFile);
    await this.uploadFile(newSupportingFile, signedUploadUrl)
    this.isLoading = false;
  }

 
  async uploadFile(supportingFile:SupportingFile, uploadPresignUrl: String){
    const contentType = supportingFile.file.type;
    await this.projectService
    .upload(uploadPresignUrl,supportingFile.file, contentType)
    .then(data=>{
      console.log('uploaded');
      this.fileUploadCompelete(supportingFile._id);
    })
    .catch(
      err => {console.log(err);}
    )
      
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
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

  cancel(){
    this.onSupportingFileListUpdated.emit([]);
    this.onClose.emit();
  }

  remove(supportingFile:SupportingFile){
    this.supportingFileList = this.supportingFileList.filter((currentFile) => {
      if(currentFile._id.toString() != supportingFile._id.toString()){
        return currentFile;
      }
    })
    this.onSupportingFileListUpdated.emit(this.supportingFileList);
  }

}
