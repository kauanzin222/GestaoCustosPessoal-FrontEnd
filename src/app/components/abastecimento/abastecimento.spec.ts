import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abastecimento } from './abastecimento';

describe('Abastecimento', () => {
  let component: Abastecimento;
  let fixture: ComponentFixture<Abastecimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Abastecimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abastecimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
