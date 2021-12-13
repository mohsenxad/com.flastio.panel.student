import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'project-file-uploader',
  templateUrl: './project-file-uploader.component.html',
  styleUrls: ['./project-file-uploader.component.scss']
})
export class ProjectFileUploaderComponent implements OnInit {

  file: File ;
  fileName: String;
  fileUrl:String;

  isFileUploaded:Boolean = false;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

  @Output() onFileUploaded = new EventEmitter<{fileName: String, fileUrl: String}>();

  constructor(
    private projectService:ProjectService
  ) { 
  }

  ngOnInit(): void {
  }

  remove(): void{
    this.fileName = undefined;
    this.fileUrl = undefined;
    this.isFileUploaded = false;
    this.onFileUploaded.emit({fileName:this.fileName,fileUrl:this.fileUrl})
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.file = files.item(0);
    let response:any = await this.projectService.getUploadUrl()
    let signedUploadUr:String = response.presignedUrl;

    this.fileName = response.fileName.toString();
    this.fileUrl = signedUploadUr.split('?')[0];
    this.uploadFile(signedUploadUr)
    this.isLoading = false;
  }


  uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.file.type;
    this.projectService.upload(uploadPresignUrl,this.file, contentType)
      .subscribe(data => {
        console.log('uploaded');
        this.isLoading = false;
        this.isFileUploaded = true;
        
        this.onFileUploaded.emit({fileName:this.fileName,fileUrl:this.fileUrl})
      });

  }

}
