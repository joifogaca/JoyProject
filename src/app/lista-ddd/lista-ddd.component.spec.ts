import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDddComponent } from './lista-ddd.component';

describe('ListaDddComponent', () => {
  let component: ListaDddComponent;
  let fixture: ComponentFixture<ListaDddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
