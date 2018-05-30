import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DdddataBaseService } from '../servicos/ddddata-base.service';
import { Ddd } from '../Entidades/ddd';

@Component({
  selector: 'app-lista-ddd',
  templateUrl: './lista-ddd.component.html',
  styleUrls: ['./lista-ddd.component.css']
})
export class ListaDddComponent implements OnInit {

  tela: string = "Lista de DDD"; 
  @Output() codigoClicado = new EventEmitter();

  listahd: string[] =["Código de aréa", "Cidade"];
  listaDDD: Ddd [] = [];

  constructor(private service: DdddataBaseService) {}
   

  ngOnInit() {
    this.service.enviarDDD.subscribe(ddds => this.listaDDD = ddds);
  }

  dddClicado(item: number)
  {
    this.codigoClicado.emit(item);
  }

}
