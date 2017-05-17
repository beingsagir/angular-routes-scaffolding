import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTwoComponent } from './cmp-two.component';

describe('CmpTwoComponent', () => {
  let component: CmpTwoComponent;
  let fixture: ComponentFixture<CmpTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
