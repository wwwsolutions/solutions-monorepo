import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormattersModule } from './shared-ui-formatters.module';

describe('SharedUiFormattersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormattersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormattersModule).toBeDefined();
  });
});
