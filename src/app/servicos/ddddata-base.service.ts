import { EventEmitter, Injectable } from '@angular/core';
import { Ddd } from '../Entidades/ddd';

@Injectable()
export class DdddataBaseService {

  

  dddsList: Ddd[] = [];
  enviarDDD = new EventEmitter();

  constructor() { }

  public setDDD(novoDDD: Ddd):void {
    this.dddsList.push(novoDDD);

    this.enviarDDD.emit(this.dddsList);
  }

  public getDDD(codigo: string){
    let ddd = Ddd;

    ddd = this.dddsList[codigo];

    return ddd;
  }


}
