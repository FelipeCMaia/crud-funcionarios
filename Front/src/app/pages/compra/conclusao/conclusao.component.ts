import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conclusao',
  templateUrl: './conclusao.component.html',
  styleUrls: ['./conclusao.component.css']
})
export class ConclusaoComponent {
  constructor(private readonly activatedRoute: ActivatedRoute,){}

  idRegistro: string | null;

  ngOnInit(): void {
    this.idRegistro = this.activatedRoute.snapshot.paramMap.get('id')
  }
}
