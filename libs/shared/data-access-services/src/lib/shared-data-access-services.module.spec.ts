import { async, TestBed } from '@angular/core/testing';
import { SharedDataAccessServicesModule } from './shared-data-access-services.module';

describe('SharedDataAccessServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataAccessServicesModule).toBeDefined();
  });
});
