import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-amor';

  constructor(private router: Router) {}

  // Métodos para navegar a las páginas
  irPagina1() {
    this.router.navigate(['/pagina1']);
  }

  irPagina12() {
    this.router.navigate(['/pagina12']);
  }

  // Método para ocultar los botones cuando se está en otra página
  estaEnPaginaPrincipal(): boolean {
    return this.router.url === '/';
  }
}
