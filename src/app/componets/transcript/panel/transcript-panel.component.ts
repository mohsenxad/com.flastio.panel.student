import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transcript } from 'src/app/model/transcript';
import { TranscriptService } from 'src/app/services/transcript/transcript.service';

@Component({
  selector: 'transcript-panel',
  templateUrl: './transcript-panel.component.html',
  styleUrls: ['./transcript-panel.component.scss']
})
export class TranscriptPanelComponent implements OnInit {

  @Input() transcript: Transcript;
  @Output() onUpdated = new EventEmitter();

  transcriptFile: File ;
  isLoading:Boolean = false;
  isConfirmDeleteVisible: Boolean = false;
  trasncript:Transcript = {};
  

  constructor(
    private transcriptService:TranscriptService,
  ) { }

  ngOnInit(): void {}

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.transcriptFile = files.item(0);
    let response:any = await this.transcriptService.getUploadUrl()
    let signedUploadUrl: String = response.presignedUrl;
    this.trasncript.fileName = response.fileName.toString();
    await this.uploadFile(signedUploadUrl)
    this.isLoading = false;
    this.onUpdated.emit();
  }

  async uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.transcriptFile.type;
    this.trasncript.fileExtention = contentType;

    await this.transcriptService
      .upload(uploadPresignUrl,this.transcriptFile, contentType)
      .then(data=>{
        console.log('uploaded');
        this.trasncript.fileUrl = uploadPresignUrl.split('?')[0];;
        this.transcriptService.setTranscript(this.trasncript);
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      })
  }

  async confirmedDelete(){
    this.isLoading = true;
    this.hideConfrimDelete();
    await this.transcriptService.setTranscript(undefined);
    this.trasncript.fileUrl = undefined;
    this.isLoading = false;
    this.onUpdated.emit();
  }
  
  hideConfrimDelete(){
    this.isConfirmDeleteVisible = false;
  }

  showConfrimDelete(){
    this.isConfirmDeleteVisible = true;
  }

  
}
