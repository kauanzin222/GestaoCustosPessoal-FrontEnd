import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Posto } from './posto';

describe('Posto', () => {
  let component: Posto;
  let fixture: ComponentFixture<Posto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Posto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Posto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
