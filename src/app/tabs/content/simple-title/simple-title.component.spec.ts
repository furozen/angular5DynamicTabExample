import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTitleComponent } from './simple-title.component';

describe('SimpleTitleComponent', () => {
  let component: SimpleTitleComponent;
  let fixture: ComponentFixture<SimpleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
