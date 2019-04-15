import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestcommentsComponent } from './latestcomments.component';

describe('LatestcommentsComponent', () => {
  let component: LatestcommentsComponent;
  let fixture: ComponentFixture<LatestcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
