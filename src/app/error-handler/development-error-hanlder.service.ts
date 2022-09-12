import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class DevelopmentErrorHanlderService implements ErrorHandler {

  constructor() { }
  handleError(error: unknown): void {
    console.error("Development",error)
  }
}
