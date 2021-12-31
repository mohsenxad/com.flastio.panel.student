import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranscriptService } from 'src/app/services/transcript/transcript.service';

@Component({
  selector: 'transcript-panel',
  templateUrl: './transcript-panel.component.html',
  styleUrls: ['./transcript-panel.component.scss']
})
export class TranscriptPanelComponent implements OnInit {

  @Input() fileUrl: String;
  @Output() onUpdated = new EventEmitter();

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
    await this.uploadFile(signedUploadUrl)
    this.isLoading = false;
    this.onUpdated.emit();
  }

  async uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.transcriptFile.type;
    await this.transcriptService
      .upload(uploadPresignUrl,this.transcriptFile, contentType)
      .then(data=>{
        console.log('uploaded');
        this.fileUrl = uploadPresignUrl.split('?')[0];
        this.transcriptService.setTranscriptFile(this.uniqFileName, this.fileUrl);
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      })
  }

  async remove(){
    this.isLoading = true;
    await this.transcriptService.setTranscriptFile(undefined, undefined);
    this.fileUrl = undefined;
    this.isLoading = false;
    this.onUpdated.emit();
  }
  
}
