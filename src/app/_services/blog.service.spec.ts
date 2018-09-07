import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';

describe('Service: Blog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
