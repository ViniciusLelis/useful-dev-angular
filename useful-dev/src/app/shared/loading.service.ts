import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  public fila: string[] = [];
  private filaLength = new BehaviorSubject<number>(0);

  novoCarregamento(chave: string) {
    if (this.fila.indexOf(chave) === -1) this.fila = [...this.fila, chave];
    this.filaLength.next(this.fila.length);
  }

  limparCarregamento(chave: string) {
    let index = -1;
    if ((index = this.fila.indexOf(chave)) !== -1)
      this.fila = this.fila.filter((v, i) => i !== index);
    this.filaLength.next(this.fila.length);
  }

  limparTodos() {
    this.fila = [];
    this.filaLength.next(this.fila.length);
  }

  receberFila(): Observable<any> {
    return this.filaLength.asObservable();
  }

  getQueueLength(): number {
    return this.fila.length;
  }
}
