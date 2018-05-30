import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RouterTestingModule } from '@angular/router/testing';

import { ListaDddComponent } from "./lista-ddd/lista-ddd.component";
import { CadastroDddComponent } from "./cadastro-ddd/cadastro-ddd.component";
import { TarifaListaComponent } from "./tarifa-lista/tarifa-lista.component";
import { TarifaCadastroComponent } from "./tarifa-cadastro/tarifa-cadastro.component";


const APP_ROUTES: Routes = [
    { path: 'ddds' , component: ListaDddComponent},
    { path: 'ddds/novo' , component: CadastroDddComponent},
    { path: 'tarifas' , component: TarifaListaComponent},
    { path: 'tarifas/novo' , component:TarifaCadastroComponent}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);