import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-compra',
  templateUrl: './minha-compra.component.html',
  styleUrls: ['./minha-compra.component.css']
})
export class MinhaCompraComponent implements OnInit {

  compras: any = [];

  ngOnInit(): void {
    this.compras = localStorage.getItem('compras');

    this.compras = JSON.parse(this.compras);


  }



}
