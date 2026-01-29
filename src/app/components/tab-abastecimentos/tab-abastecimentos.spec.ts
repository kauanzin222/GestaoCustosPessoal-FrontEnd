import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAbastecimentos } from './tab-abastecimentos';

describe('TabAbastecimentos', () => {
  let component: TabAbastecimentos;
  let fixture: ComponentFixture<TabAbastecimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabAbastecimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAbastecimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
