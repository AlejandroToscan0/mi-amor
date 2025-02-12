import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css',
})
export class Pagina1Component {
  title = 'mi-amor';

  constructor(private router: Router) {}

  irPagina2() {
    this.router.navigate(['/pagina2']);
  }
}
