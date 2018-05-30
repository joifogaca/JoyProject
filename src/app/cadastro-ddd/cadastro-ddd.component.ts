import { Component, OnInit } from '@angular/core';
import { Ddd } from '../Entidades/ddd';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-cadastro-ddd',
  templateUrl: './cadastro-ddd.component.html',
  styleUrls: ['./cadastro-ddd.component.css']
})
export class CadastroDddComponent implements OnInit {

  tela: string = "Cadastro de DDD"; 
  
  _codigo:string;
  _regiao: string;
  

  constructor() { }

  ngOnInit() {

    
  }

  public cadastrar(){

    let novoDDD = new Ddd(this._codigo, this._regiao);
  }



}
