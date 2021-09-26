import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'app-full-screen-loading',
  templateUrl: './full-screen-loading.component.html',
  styleUrls: ['./full-screen-loading.component.sass']
})
export class FullScreenLoadingComponent implements OnInit {

  subscription: Subscription;
  tamanhoFila: number = 0;

  constructor(private loadingService: LoadingService) {
    this.subscription = this.loadingService.receberFila().subscribe(tamanho => {
      this.tamanhoFila = tamanho;
    });
  }
  ngOnInit(): void {
  }

}
