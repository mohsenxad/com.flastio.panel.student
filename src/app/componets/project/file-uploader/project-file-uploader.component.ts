import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SummaryFile } from 'src/app/model/summaryFile';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'project-file-uploader',
  templateUrl: './project-file-uploader.component.html',
  styleUrls: ['./project-file-uploader.component.scss']
})
export class ProjectFileUploaderComponent implements OnInit {

  @Input() summaryFile:SummaryFile;
  @Output() onFileUploaded = new EventEmitter<SummaryFile>();

  isFileUploaded:Boolean = false;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

 

  constructor(
    private projectService:ProjectService
  ) { 
  }

  ngOnInit(): void {
    if(this.summaryFile){
      this.isFileUploaded = true;
    }
  }

  

  setDropable(){
    console.log('init dropable in project');
    
    let dropContainer = document.getElementById("divProjectSummaryFileSelector");

    dropContainer.ondragover = dropContainer.ondragenter = (evt) => {
      evt.preventDefault();
    };

    dropContainer.ondrop = (evt) => {
      this.handleFileInput(evt.dataTransfer.files)
      evt.preventDefault();
    };
  }

  remove(): void{
    this.summaryFile = undefined;
    this.isFileUploaded = false;
    this.onFileUploaded.emit(this.summaryFile)
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    let localSummaryFile: File = files.item(0);
    let response:any = await this.projectService.getUploadUrl()
    let signedUploadUrl:String = response.presignedUrl;
    if(!this.summaryFile){
      this.summaryFile = {}
    }
    this.summaryFile.fileName = response.fileName.toString();
    this.summaryFile.fileExtention = localSummaryFile.type;
    await this.uploadFile(signedUploadUrl, localSummaryFile)
    this.isLoading = false;
  }


  async uploadFile(uploadPresignUrl: String, localSummaryFile: File){
    this.isLoading = true;
    await this.projectService.upload(uploadPresignUrl,localSummaryFile, this.summaryFile.fileExtention)
    .then(data => {
      console.log('uploaded');
      this.summaryFile.fileUrl = uploadPresignUrl.split('?')[0];
      this.isLoading = false;
      this.isFileUploaded = true;
      this.onFileUploaded.emit(this.summaryFile)
    })
    .catch(err => {
      console.log(err);
    })
  }

}
