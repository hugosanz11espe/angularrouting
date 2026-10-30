import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectNumerosDobles } from './select-numeros-dobles';

describe('SelectNumerosDobles', () => {
  let component: SelectNumerosDobles;
  let fixture: ComponentFixture<SelectNumerosDobles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNumerosDobles],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectNumerosDobles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
