import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resume } from 'src/app/model/resume';
import { ResumeService } from 'src/app/services/resume/resume.service';

@Component({
  selector: 'resume-panel',
  templateUrl: './resume-panel.component.html',
  styleUrls: ['./resume-panel.component.scss']
})
export class ResumePanelComponent implements OnInit {


  @Input() resume: Resume;
  @Output() onUpdated = new EventEmitter();
  
  
  isLoading:Boolean = false;
  isConfirmDeleteVisible: Boolean = false;
  isViewFileVisible: Boolean = false;
  isSent:Boolean = false;
  

  constructor(
    private resumeService:ResumeService,
  ) {}

  ngOnInit(): void {

  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    if(!this.resume){
      this.resume = {}
    }
    let resumeFile: File = files.item(0);
    let response:any = await this.resumeService.getUploadUrl()
    let signedUploadUrl:String = response.presignedUrl;
    this.resume.fileName = response.fileName.toString();
    this.resume.fileExtention = resumeFile.type;
    await this.uploadFile(signedUploadUrl, resumeFile)
    this.isLoading = false;
    this.onUpdated.emit();
  }


  async uploadFile(uploadPresignUrl: String, resumeFile: File){
    this.isLoading = true;
    await this.resumeService
      .upload(uploadPresignUrl, resumeFile, this.resume.fileExtention)
      .then(async data=>{
        this.resume.fileUrl = uploadPresignUrl.split('?')[0];
        this.resume.uploadTimeStamp = new Date();
        await this.resumeService.setTranscript(this.resume);
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      })
      
  }

  async confirmedDelete(){
    this.isLoading = true;
    this.hideConfrimDelete();
    await this.resumeService.setTranscript(undefined);
    this.resume = undefined;
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
    this.resume.isRequestedFeedback = true
    await this.resumeService.setTranscript(this.resume);
    //await this.resumeService.requestFeedback();
    this.isSent = true;
    setTimeout(()=>{
      this.isSent = false;
    },5500)
    
    this.isLoading = false;
  }

  view(){
    let fileViwerAcceptableFileExtentionList: String[] = ['text/plain', 'image/png', 'application/pdf']
    if(fileViwerAcceptableFileExtentionList.includes(this.resume.fileExtention)){
      this.isViewFileVisible = true;
    }else{
      window.open(this.resume.fileUrl.toString(),'_blank');
    }
  }

  hideShowFileModal(){
    this.isViewFileVisible = false;
  }
}