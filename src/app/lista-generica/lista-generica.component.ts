import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-generica',
  templateUrl: './lista-generica.component.html',
  styleUrls: ['./lista-generica.component.css']
})
export class ListaGenericaComponent implements OnInit {

  @Input() headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
