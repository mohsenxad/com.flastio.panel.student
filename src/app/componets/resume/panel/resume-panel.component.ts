import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeService } from 'src/app/services/resume/resume.service';

@Component({
  selector: 'resume-panel',
  templateUrl: './resume-panel.component.html',
  styleUrls: ['./resume-panel.component.scss']
})
export class ResumePanelComponent implements OnInit {

  @Input() fileUrl: String;
  @Input() isRequestedResumeFeedback: Boolean;
  @Output() onUpdated = new EventEmitter();
  
  
  transcriptFile: File ;
  uniqFileName: String;
  isLoading:Boolean = false;
  isConfirmDeleteVisible: Boolean = false;
  isSent:Boolean = false;
  

  constructor(
    private resumeService:ResumeService,
  ) {}
  

    

  ngOnInit(): void {
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.transcriptFile = files.item(0);
    let response:any = await this.resumeService.getUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUr:String = response.presignedUrl;
    await this.uploadFile(signedUploadUr)
    this.isLoading = false;
    this.onUpdated.emit();
  }


  async uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.transcriptFile.type;
    await this.resumeService
      .upload(uploadPresignUrl,this.transcriptFile, contentType)
      .then(data=>{
        console.log('uploaded');
        this.fileUrl = uploadPresignUrl.split('?')[0];
        this.resumeService.setTranscriptFile(this.uniqFileName, this.fileUrl);
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      })
      
  }

  async confirmedDelete(){
    this.isLoading = true;
    this.hideConfrimDelete();
    await this.resumeService.setTranscriptFile(undefined, undefined);
    this.fileUrl = undefined;
    this.isLoading = false;
    
    this.onUpdated.emit();
  }
  
  hideConfrimDelete(){
    this.isConfirmDeleteVisible = false;
  }

  showConfrimDelete(){
    this.isConfirmDeleteVisible = true;
  }

  async requestFeedback(){
    this.isLoading = true;
    await this.resumeService.requestFeedback();
    this.isSent = true;
    setTimeout(()=>{
      this.isSent = false;
    },5500)
    this.isRequestedResumeFeedback = true
    this.isLoading = false;
  }
}