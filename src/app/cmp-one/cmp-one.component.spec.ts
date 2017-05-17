import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpOneComponent } from './cmp-one.component';

describe('CmpOneComponent', () => {
  let component: CmpOneComponent;
  let fixture: ComponentFixture<CmpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
