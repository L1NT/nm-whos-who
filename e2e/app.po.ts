import {browser, element, by, Key} from 'protractor';

export class NmWhosWhoPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  // this won't work due to leaving an Angular site & the redirect_url won't match
  // the Meetup.com api key
  search(query:string) {
    function enterQuery() {
      element(by.css('app-root input')).sendKeys(query, Key.ENTER);
    }
    let oauthButton = element(by.buttonText('get Meetup.com auth code'));
    oauthButton.isPresent().then((button:boolean) => {
      if (button) {
        oauthButton.click();
        element(by.buttonText('Allow')).click().then(() => {
          enterQuery();
        });
      } else {
        enterQuery();
      }
    });
  }
}
