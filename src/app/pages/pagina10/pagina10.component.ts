import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina10',
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina10.component.html',
  styleUrl: './pagina10.component.css'
})
export class Pagina10Component {
  title = 'mi-amor';
  
    constructor(private router: Router) {}
  
    irPagina11() {
      this.router.navigate(['/pagina11']);
    }
}
