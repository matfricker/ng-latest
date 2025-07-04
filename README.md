# NgLatest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Firebase

## Check if firebase CLI installed:
run `firebase --version` in a terminal should return the current installed cli version. If not recognised, tools need to be installed globally.
run `npm i -g firebase-tools` see [docs](https://firebase.google.com/docs/cli?authuser=0#windows-npm)

## [Serve locally](https://firebase.google.com/docs/cli?authuser=0#test-locally)
run `firebase serve` or `firebase serve -p 8080 --host localhost` to specify a port.

## [How to Deploy App](https://firebase.google.com/docs/cli?authuser=0#deployment)

run `firebase deploy` you can also add `-m "Deployment Message"`
