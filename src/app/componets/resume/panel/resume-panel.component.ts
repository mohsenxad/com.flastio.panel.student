import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume/resume.service';

@Component({
  selector: 'resume-panel',
  templateUrl: './resume-panel.component.html',
  styleUrls: ['./resume-panel.component.scss']
})
export class ResumePanelComponent implements OnInit {

  @Input() fileUrl: String;
  
  
  transcriptFile: File ;
  uniqFileName: String;
  isLoading:Boolean = false;
  

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
    this.uploadFile(signedUploadUr)
    this.isLoading = false;
  }


  async uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.transcriptFile.type;
    await this.resumeService.upload(uploadPresignUrl,this.transcriptFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        this.fileUrl = uploadPresignUrl.split('?')[0];
        this.resumeService.setTranscriptFile(this.uniqFileName, this.fileUrl);
        this.isLoading = false;
      });
  }

  async remove(){
    this.isLoading = true;
    await this.resumeService.setTranscriptFile(undefined, undefined);
    this.fileUrl = undefined;
    this.isLoading = false;
  }
}