import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesSeasonComponent } from './animes-season.component';

describe('AnimesSeasonComponent', () => {
  let component: AnimesSeasonComponent;
  let fixture: ComponentFixture<AnimesSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
