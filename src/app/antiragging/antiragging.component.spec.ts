import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiraggingComponent } from './antiragging.component';

describe('AntiraggingComponent', () => {
  let component: AntiraggingComponent;
  let fixture: ComponentFixture<AntiraggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiraggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
