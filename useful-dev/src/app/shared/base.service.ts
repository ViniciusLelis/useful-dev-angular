import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public async post<TInput>(route: string, bodyContent: TInput): Promise<Response> {
    const apiUrl: string = route;
    return fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(bodyContent),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
  }

  public getApiEndpoint(): string {
    return environment.api;
  }
}
