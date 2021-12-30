import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'project-file-uploader',
  templateUrl: './project-file-uploader.component.html',
  styleUrls: ['./project-file-uploader.component.scss']
})
export class ProjectFileUploaderComponent implements OnInit {

  @Input() fileUrl:String;
  @Output() onFileUploaded = new EventEmitter<{fileName: String, fileUrl: String}>();

  file: File ;
  fileName: String;
  

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
    if(this.fileUrl){
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
