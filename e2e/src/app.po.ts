import { browser, by, element } from 'protractor';

export class NavPage {
  navigateToHome() {
    return browser.get('/');
  }

  navigateToBlog() {
    return browser.get('/blog');
  }

  navigateToAbout() {
    return browser.get('/about');
  }

  navigateToAlbum() {
    return browser.get('/album');
  }

  getHomeId() {
    return element(by.id("home"));
  }


  getBlogId() {
    return element(by.id("blog"));
  }

  getAlbumId() {
    return element(by.id("album"));
  }
}