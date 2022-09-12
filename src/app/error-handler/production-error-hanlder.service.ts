import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ProductionErrorHanlderService implements ErrorHandler {

  constructor(private httpClient:HttpClient) { }

  handleError(error: unknown): void {
    console.error("Production",this.httpClient,error)
  }
}
