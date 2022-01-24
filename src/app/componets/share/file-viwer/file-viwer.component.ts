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

  isImage:Boolean = false;
  isPdf:Boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    console.log(this.fileExtention);
    
    if(this.fileExtention == 'image/png'){
      this.isImage = true;
    }else if(this.fileExtention == 'application/pdf'){
      this.isPdf = true;
    }else{
      console.log('open with others');
      
    }

  }

  close(){
    this.onClose.emit();
  }

  getSummeryFileIFrameUrl():SafeResourceUrl {
    let result: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl.toString());
     return result;
  }

}
