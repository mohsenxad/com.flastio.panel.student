import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'certification-file-uploader',
  templateUrl: './certification-file-uploader.component.html',
  styleUrls: ['./certification-file-uploader.component.scss']
})
export class CertificationFileUploaderComponent implements OnInit {

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
    private certificationService:CertificationService
  ) { 
  }

  ngOnInit(): void {
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.file = files.item(0);
    let response:any = await this.certificationService.getUploadUrl()
    let signedUploadUr:String = response.presignedUrl;

    this.fileName = response.fileName.toString();
    this.fileUrl = signedUploadUr.split('?')[0];
    this.uploadFile(signedUploadUr)
    this.isLoading = false;
  }


  uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.file.type;
    this.certificationService.upload(uploadPresignUrl,this.file, contentType)
      .subscribe(data => {
        console.log('uploaded');
        this.isLoading = false;
        this.isFileUploaded = true;
        
        this.onFileUploaded.emit({fileName:this.fileName,fileUrl:this.fileUrl})
      });

  }

}
