import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentoManterComponent } from './procedimento-manter.component';

describe('ProcedimentoManterComponent', () => {
  let component: ProcedimentoManterComponent;
  let fixture: ComponentFixture<ProcedimentoManterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimentoManterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedimentoManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
