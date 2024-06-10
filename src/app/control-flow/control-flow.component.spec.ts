import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowComponent } from './control-flow.component';

describe('ControlFlowComponent', () => {
  let component: ControlFlowComponent;
  let fixture: ComponentFixture<ControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value', () => {
    const num = 5;
    component.changeValue(num);
    expect(component.value).toEqual(num);
  });

  it('should log the value', () => {
    const num = 5;
    spyOn(console, 'log');
    component.changeValue(num);
    expect(console.log).toHaveBeenCalledWith(num.toString());
  });
});
