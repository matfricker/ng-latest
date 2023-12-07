import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFunctionsComponent } from './data-functions.component';

describe('DataFunctionsComponent', () => {
  let component: DataFunctionsComponent;
  let fixture: ComponentFixture<DataFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
