import { NmWhosWhoPage } from './app.po';

describe('nm-whos-who App', () => {
  let page: NmWhosWhoPage;

  beforeEach(() => {
    page = new NmWhosWhoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
