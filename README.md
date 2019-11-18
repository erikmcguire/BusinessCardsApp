# BusinessCardsApp

* #####[Firebase Deployment](http://business-cards-38b92.web.app/)

#### Approximate Time
  24 hours (distributed).

### Project Requirements

##### Required Functionality
- [x] New
- [x] Search
- [x] Update
- [x] Snapshot
- [x] Delete

#### Lifecycle Hooks

- [x] ngOnDestroy:
    - [x] Unsubscribe
    - Image Service
    - Auth Service
    - Webcam Component
    - Search Component

- [x] ngOnInit:
    - Webcam Component
    - Business Card Component
    - Not Found Component
    - Image Service

#### Components

- [x] Business Card:
    - Display cards
      - Descending sort by date added
      - Unique to user
      - Displays images
      - Fields: first and last name, email, phone, additional info
    - Edit/Delete
    - Copy of card image
- [x] Webcam
    - Scan card with Google Cloud Vision API
    - Autofill new card with Google Cloud Language API (NER)
    - Remote option
    - Local option with base64 conversion
    - Toggle camera
- [x] Add New Business Card
    - Autofill from Webcam
    - Manual fill
    - Clear form/add card buttons
    - Display full scan results
    - Log entities to console
    - Redirect to cards display
    - Save to firebase with image, timestamp
- [x] Search Business Cards
    - Descending sort by date added
    - Restricted to unique user
    - Displays card images
    - Search by First Name or Organization
        - Case insensitive
        - Ignores leading/trailing whitespace
- [x] Authentication
    - Modal Log-In/Out with Google or Email and Password
    - Automatic redirect to cards display
    - AuthGuard restricts to default landing page
- [x] Page Not Found
    - Automatic redirect after number of seconds.

#### Routes
- [x] Default route to landing
- [x] Landing
- [x] Login/Profile status
- [x] Add Card
- [x] Business card(s)
- [x] Search
- [x] Webcam
- [x] Not Found
- [x] Wildcard to Not Found.

* All routes:
    - Animated
    - AuthGuard

#### Services
- [x] App Service
    - Create/Update/Destroy
- [x] Image Service
    - Read
    - Scan
    - NER (Named Entity Recognition)
- [x] Auth Service
    - Firebase Auth
        - Google
        - Email/Password
    - Status check

#### Imports
- [x] Firebase packages
- [x] ngx-webcam
- [x] HTTP
- [x] Forms
- [x] rxjs

#### .gitignore
- [x] Environments

###### Views include:
- ngClass
- ngModel
 - \*ngIf
 - \*ngFor

#### Extras
* Material design
* Animations
* Composite Firebase indices for search (unique, sorted, case insensitive, trimmed)
* Firebase rules for unique users
* Google Analytics
    - Login event w/ user
    - Search event w/ query
    - Not found event
    - General view defaults

#### Behaviour

#### Challenges

** **

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
