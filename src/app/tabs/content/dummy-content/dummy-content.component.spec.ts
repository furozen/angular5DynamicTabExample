import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyContent } from './dummy-content.component';

describe('DummyContent', () => {
  let component: DummyContent;
  let fixture: ComponentFixture<DummyContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
