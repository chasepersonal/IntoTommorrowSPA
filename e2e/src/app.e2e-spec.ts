import { NavPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('PersonalBlog App', () => {
  let nav: NavPage;
  
  beforeEach(() => {
    nav = new NavPage();
  });

  it('should navigate to the Home Page', () => {

    nav.navigateToHome();
  });

  it('should navigate to the About Page', () => {
    nav.navigateToAbout();
  });

  it('should navigate to the Blog Page', () => {
    nav.navigateToBlog();
  });

  it('should navigate to the Album Page', () => {
    nav.navigateToAlbum();
  });
});

