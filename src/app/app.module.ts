import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { InterpolationBindingComponent } from './testandoComponentes/interpolation-binding/interpolation-binding.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroDddComponent } from './cadastro-ddd/cadastro-ddd.component';
import { ListaDddComponent } from './lista-ddd/lista-ddd.component';

import { FormsModule } from '@angular/forms';
import { ListaGenericaComponent } from './lista-generica/lista-generica.component';
import { routing } from './app.routing';
import { TarifaListaComponent } from './tarifa-lista/tarifa-lista.component';
import { TarifaCadastroComponent } from './tarifa-cadastro/tarifa-cadastro.component';
import { DdddataBaseService } from './servicos/ddddata-base.service';
import { TarifaDataBaseService } from './servicos/tarifa-data-base.service';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationBindingComponent,
    CabecalhoComponent,
    CadastroDddComponent,
    ListaDddComponent,
    ListaGenericaComponent,
    TarifaListaComponent,
    TarifaCadastroComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule, 
    routing
  ],
  providers: [
    DdddataBaseService,
    TarifaDataBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
