import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina8',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina8.component.html',
  styleUrl: './pagina8.component.css'
})
export class Pagina8Component {
  constructor(private router: Router) {} // Inyecta Router

  goToPagina9() {
    this.router.navigate(['/pagina9']); // Navega a la página 9
  }
}
