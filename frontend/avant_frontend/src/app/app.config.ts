import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    //mine
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),


    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    NG_EVENT_PLUGINS,
    NG_EVENT_PLUGINS,
    NG_EVENT_PLUGINS
  ]
};
