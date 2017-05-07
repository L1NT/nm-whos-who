import {by, element} from 'protractor';
import {NmWhosWhoPage} from './app.po';

describe('nm-whos-who App', () => {
  let page: NmWhosWhoPage;

  beforeEach(() => {
    page = new NmWhosWhoPage();
  });

  it('should display the page title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Who\'s Who in MKE Tech');
  });

  xit('should display members with matching name', () => {
    pending('a method to handle non-angular site navigation and redirect_url difference');
    page.search('luke');
    expect(element.all(by.tagName('nm-ww-member')).count()).toBe(3);
  });
});
