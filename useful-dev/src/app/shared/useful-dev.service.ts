import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UsefulDevService {

  fileFormatMapping = ['.txt', '.pdf'];

  constructor(private baseService: BaseService,
    private loadingService: LoadingService) {
  }

  public generateValidFile(fileName: string, fileFormat: number, fileSize: number, randomWords: string[]) {
    this.loadingService.novoCarregamento('generateValidFile');

    setTimeout(() => {
      const words = randomWords.join(',');
      const url = `${this.baseService.getApiEndpoint()}/api/v1/file-generators?fileExtension=${fileFormat}&fileName=${fileName}&fileSizeBytes=${fileSize}&randomWordsSet=${words}`;
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      this.loadingService.limparCarregamento('generateValidFile');
    }, 1000);
  }

}
