import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      declarations: [MainNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
