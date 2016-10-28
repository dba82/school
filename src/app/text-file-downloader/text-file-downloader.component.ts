import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'dhb-text-file-downloader',
  templateUrl: './text-file-downloader.component.html',
  styleUrls: ['./text-file-downloader.component.css']
})
export class TextFileDownloaderComponent {
  @Input('file-name') fileName = ''+ (new Date());
  @Input('file-ending') fileEnding = 'txt';
  @Input('file-content') fileContent = '';

  constructor(private sanitizer : DomSanitizer) { }

  get sanitizedUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(
      'data:text/plain;charset=utf-8,' + 
      ((typeof this.fileContent == typeof 'string') ?
       this.fileContent :
       JSON.stringify(this.fileContent)));
  }

}
