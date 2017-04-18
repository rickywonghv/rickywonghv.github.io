import { Testng2Page } from './app.po';

describe('testng2 App', () => {
  let page: Testng2Page;

  beforeEach(() => {
    page = new Testng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
