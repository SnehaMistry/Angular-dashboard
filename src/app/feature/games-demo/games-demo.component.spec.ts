import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDemoComponent } from './games-demo.component';

describe('GamesDemoComponent', () => {
  let component: GamesDemoComponent;
  let fixture: ComponentFixture<GamesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
