import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesCarouselComponent } from './animes-carousel.component';

describe('AnimesSeasonComponent', () => {
  let component: AnimesCarouselComponent;
  let fixture: ComponentFixture<AnimesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
