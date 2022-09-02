import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(()=>{
  const keepingUserUpdatedElement = document.getElementById('initialContainer');
  if(keepingUserUpdatedElement)
  {
    keepingUserUpdatedElement.remove();
  }
})
  .catch(err => {
    const keepingUserUpdatedElement = document.getElementById('keepingUserUpdatedAboutAppInitialization');
    if(keepingUserUpdatedElement)
    {
      keepingUserUpdatedElement.classList.remove('loading');
      keepingUserUpdatedElement.classList.add('error');
      keepingUserUpdatedElement.textContent="APP Startup Failed! :(";
    }
  });
