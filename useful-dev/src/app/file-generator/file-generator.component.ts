import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/loading.service';
import { UsefulDevService } from '../shared/useful-dev.service';

@Component({
  selector: 'app-file-generator',
  templateUrl: './file-generator.component.html',
  styleUrls: ['./file-generator.component.sass']
})
export class FileGeneratorComponent implements OnInit {

  selectedFormat: string;
  selectedUnit: string;
  fileSize: string;
  fileName: string;
  randomWordsSet: string;

  constructor(private usefulDevService: UsefulDevService, private loadingService: LoadingService) { 
    this.selectedFormat = '0';
    this.selectedUnit = '0';
    this.fileSize = '';
    this.fileName = '';
    this.randomWordsSet = '';
  }

  ngOnInit(): void {
  }

  keyDownNumberInput(event: any) {
    if(event.key==='.' || event.key===',') {
      event.preventDefault();
    }
  }

  pasteNumberInput(event: any) {
    event.preventDefault();
  }

  generateFile() {
    const fileFormatInt = parseInt(this.selectedFormat);
    var fileSizeInt = parseInt(this.fileSize);
    switch(this.selectedUnit) {
      case '1': fileSizeInt = fileSizeInt * 1024; break;
      case '2': fileSizeInt = fileSizeInt * 1024 * 1024; break;
    }

    const randomWordsSetSplitted = this.randomWordsSet.replace(' ,', ',').replace(', ', ',').split(',');
    this.usefulDevService.generateValidFile(this.fileName, fileFormatInt, fileSizeInt, randomWordsSetSplitted);
  }

  isGeneratingFile(): boolean {
    return this.loadingService.getQueueLength() > 0;
  }

}
