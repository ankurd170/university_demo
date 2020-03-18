import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColnavbarComponent } from './colnavbar.component';

describe('ColnavbarComponent', () => {
  let component: ColnavbarComponent;
  let fixture: ComponentFixture<ColnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
