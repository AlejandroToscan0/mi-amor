import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Pagina1Component } from './app/pages/pagina1/pagina1.component';
import { Pagina2Component } from './app/pages/pagina2/pagina2.component';
import { Pagina3Component } from './app/pages/pagina3/pagina3.component';
import { Pagina4Component } from './app/pages/pagina4/pagina4.component';
import { Pagina5Component } from './app/pages/pagina5/pagina5.component';
import { Pagina6Component } from './app/pages/pagina6/pagina6.component';
import { Pagina7Component } from './app/pages/pagina7/pagina7.component';
import { Pagina8Component } from './app/pages/pagina8/pagina8.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      
      { path: 'pagina1', component: Pagina1Component },
      { path: 'pagina2', component: Pagina2Component },
      { path: 'pagina3', component: Pagina3Component },
      { path: 'pagina4', component: Pagina4Component },
      { path: 'pagina5', component: Pagina5Component },
      { path: 'pagina6', component: Pagina6Component },
      { path: 'pagina7', component: Pagina7Component },
      { path: 'pagina8', component: Pagina8Component }
    ])
  ]
}).catch(err => console.error(err));
