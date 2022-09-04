import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomNgTemplateOutletComponent } from './test-custom-ng-template-outlet.component';

describe('TestCustomNgTemplateOutletComponent', () => {
  let component: TestCustomNgTemplateOutletComponent;
  let fixture: ComponentFixture<TestCustomNgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCustomNgTemplateOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCustomNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
