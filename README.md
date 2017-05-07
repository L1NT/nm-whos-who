# NM Whos Who

### [View Online](https://home.lukejeter.com:3723/nm)

## Status
* responsive - uses Bootstrap v4 grid layout and responsive features (hidden)
* filter a list of things - pulls first 800 Members who joined the MilwaukeeJS Meetup and allows the User to filter by member name; the query is far from "quick", however
* search input and list of results - input is triggered by 'keyevent.enter' and 'input.blur'
* includes the ability to 'pin' results and query for additional members
  * (outstanding) 'unpinned' items should only be added to the results list if they match the input query term
* results are sorted alphabetically - both the 'pinned' list and the active results are alphabetized by member name
* (outstanding) pull data from a backend service you write - I'd initially overlooked this requirement, which is why the UI uses Oauth2 to pull data directly from the Meetup.com API; I began creating and Express server, but the following items are still outstanding
  * finish background service to fetch Meetup and member data
  * add unit and api tests
  * expand endpoint data
  * update UI to consume different JSON structures
* (outstanding) add loading spinner
* (outstanding) unit tests for Angular Components/Service
* (outstanding) e2e Protractor tests
* (outstanding) Travis config

## Technologies
* Angular v4
  * Angular CLI to bootstrap project and manage build
  * TypeScript
* Bootstrap v4
* Sass
* Glyphicons
* Protractor/Karma/Jasmine - loosely; most was configured by angular-cli
* Oauth2 with Meetup.com API
* Express server
  * orm
  * Sqlite3

## Description
You’ll be working with a cross-functional engineering team to deliver PoC’s and experiments; you’ll be the lead engineer. To demonstrate excellence in modern development tools and frameworks, we ask that you complete the following challenge. Please use this test to show off your skill set and what you can bring to the team. You will be critiqued on your quality, completeness, creativity, and technologies. If we proceed forward in the interviewing process, you will be asked to walk through your code. Choose modern technologies that exercise the breadth of approach and ones that you’re comfortable developing with.
When you have completed the following challenge, place your code in a code repository, ex. github, bitbucket, dropbox, etc.

## Mission/Challenge
Create a responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of things. The top of the page will have a search input field and then below that a list of things in response to the filter. The things should be sorted alphabetically. The things could be anything, but should be AJAX pulled from a backend service that you write and should ultimately be pulled from an open public API.
Here’s an example list of API’s curated on GitHub, [public-apis](https://github.com/toddmotto/public-apis) but feel free to use any public API you wish.

## @angular/cli details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
