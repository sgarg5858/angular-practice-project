import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTabsComponent } from './testing-tabs.component';

describe('TestingTabsComponent', () => {
  let component: TestingTabsComponent;
  let fixture: ComponentFixture<TestingTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
