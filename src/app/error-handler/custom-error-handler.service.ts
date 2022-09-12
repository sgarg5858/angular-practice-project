import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    throw new Error('Method not implemented.');
  }
}
