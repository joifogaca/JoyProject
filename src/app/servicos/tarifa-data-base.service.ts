import { Injectable, EventEmitter } from '@angular/core';
import { Tarifa } from '../Entidades/tarifa';

@Injectable()
export class TarifaDataBaseService {

  tarifasList: Tarifa[] = [];
  enviarTarifa = new EventEmitter();
  
  constructor() { }

  setTarifa(novaTarifa: Tarifa):void {
    this.tarifasList.push(novaTarifa);

    this.enviarTarifa.emit(this.tarifasList);
  }

  getTarifa(id: number):Tarifa{
    let tarifa: Tarifa;

    tarifa = this.tarifasList[id];

    return tarifa;
  }

}
