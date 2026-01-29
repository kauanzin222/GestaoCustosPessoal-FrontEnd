import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPosto } from './tab-posto';

describe('TabPosto', () => {
  let component: TabPosto;
  let fixture: ComponentFixture<TabPosto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPosto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPosto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
