import { RxJSLovesAngularPage } from './app.po';

describe('rx-jsloves-angular App', function() {
  let page: RxJSLovesAngularPage;

  beforeEach(() => {
    page = new RxJSLovesAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
