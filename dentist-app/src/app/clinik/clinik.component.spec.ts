import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinikComponent } from './clinik.component';

describe('ClinikComponent', () => {
  let component: ClinikComponent;
  let fixture: ComponentFixture<ClinikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
