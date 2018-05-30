import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaListaComponent } from './tarifa-lista.component';

describe('TarifaListaComponent', () => {
  let component: TarifaListaComponent;
  let fixture: ComponentFixture<TarifaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
