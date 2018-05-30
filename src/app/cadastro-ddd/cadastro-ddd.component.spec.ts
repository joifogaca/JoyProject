import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDddComponent } from './cadastro-ddd.component';

describe('CadastroDddComponent', () => {
  let component: CadastroDddComponent;
  let fixture: ComponentFixture<CadastroDddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
