import { Component, Input, OnInit } from '@angular/core';
import { TranscriptService } from 'src/app/services/transcript/transcript.service';

@Component({
  selector: 'transcript-panel',
  templateUrl: './transcript-panel.component.html',
  styleUrls: ['./transcript-panel.component.scss']
})
export class TranscriptPanelComponent implements OnInit {

  @Input() fileUrl: String;

  transcriptFile: File ;
  uniqFileName: String;
  isLoading:Boolean = false;
  

  constructor(
    private transcriptService:TranscriptService,
  ) { }

  ngOnInit(): void {}

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.transcriptFile = files.item(0);
    let response:any = await this.transcriptService.getUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUrl: String = response.presignedUrl;
    this.uploadFile(signedUploadUrl)
    this.isLoading = false;
  }

  uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.transcriptFile.type;
    this.transcriptService.upload(uploadPresignUrl,this.transcriptFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        this.fileUrl = uploadPresignUrl.split('?')[0];
        this.transcriptService.setTranscriptFile(this.uniqFileName, this.fileUrl);
        this.isLoading = false;
      });
  }

  remove(){
    this.isLoading = true;
    this.transcriptService.setTranscriptFile(undefined, undefined);
    this.fileUrl = undefined;
    this.isLoading = false;
  }
  
}
