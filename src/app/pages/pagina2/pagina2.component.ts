import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})

export class Pagina2Component {
  title = 'mi-amor';
  
    constructor(private router: Router) {}
  
    irPagina2() {
      this.router.navigate(['/pagina2']);
    }
}

