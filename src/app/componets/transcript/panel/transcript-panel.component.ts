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

  isLoading:Boolean = false;
  isConfirmDeleteVisible: Boolean = false;
  isViewFileVisible: Boolean = false;
  trasncript:Transcript = {};
  
  constructor(
    private transcriptService:TranscriptService,
  ) { }

  ngOnInit(): void {}

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    let transcriptFile:File = files.item(0);
    let response:any = await this.transcriptService.getUploadUrl()
    let signedUploadUrl: String = response.presignedUrl;
    this.trasncript.fileName = response.fileName.toString();
    this.trasncript.fileExtention = transcriptFile.type;
    await this.uploadFile(signedUploadUrl, transcriptFile)
    this.isLoading = false;
    this.onUpdated.emit();
  }

  async uploadFile(uploadPresignUrl: String, transcriptFile: File){
    this.isLoading = true;
    await this.transcriptService
      .upload(uploadPresignUrl,transcriptFile, this.trasncript.fileExtention)
      .then(data=>{
        console.log('uploaded');
        this.trasncript.fileUrl = uploadPresignUrl.split('?')[0];
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
    this.trasncript = undefined;
    this.isLoading = false;
    this.onUpdated.emit();
  }
  
  hideConfrimDelete(){
    this.isConfirmDeleteVisible = false;
  }

  showConfrimDelete(){
    this.isConfirmDeleteVisible = true;
  }

  view(){
    let fileViwerAcceptableFileExtentionList: String[] = ['text/plain', 'image/png', 'application/pdf']
    if(fileViwerAcceptableFileExtentionList.includes(this.transcript.fileExtention)){
      this.isViewFileVisible = true;
    }else{
      window.open(this.transcript.fileUrl.toString(),'_blank');
    }
  }

  hideShowFileModal(){
    this.isViewFileVisible = false;
  }
  
  
}
