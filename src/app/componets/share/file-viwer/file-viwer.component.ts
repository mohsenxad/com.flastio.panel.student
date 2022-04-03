import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'file-viwer',
  templateUrl: './file-viwer.component.html',
  styleUrls: ['./file-viwer.component.scss']
})
export class FileViwerComponent implements OnInit {

  @Input() fileUrl : String;
  @Input() fileExtention : String;
  @Output() onClose = new EventEmitter();

  isLoading:Boolean = true;
  isImage:Boolean = false;
  isPdf:Boolean = false;
  summeryFileIFrameUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    
    if(this.fileExtention == 'image/png'){
      this.isImage = true;
    }else if(this.fileExtention == 'application/pdf'){
      this.summeryFileIFrameUrl = this.getSummeryFileIFrameUrl()
      this.isPdf = true;
    }else{
      console.log('open with others');
    }

  }

  hideLoading(){
    console.log('loading done');
    
    this.isLoading = false;
  }

  close(){
    this.onClose.emit();
  }

  getSummeryFileIFrameUrl():SafeResourceUrl {
    let result: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl.toString());
    return result;
  }

}
