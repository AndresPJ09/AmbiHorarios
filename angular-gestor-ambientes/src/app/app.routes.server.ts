import { Routes } from '@angular/router';

export const serverRoutes: Routes = [
  {
    path: '**',
    // Si estás usando prerendering o SSR, asegúrate de configurarlo aquí
    // puedes utilizar "pathMatch: 'full'" o definir un RenderMode específico si es necesario.
  }
];
