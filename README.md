# BusinessCardsApp

* [Firebase Deployment](http://business-cards-38b92.web.app/)
* https://github.com/erikmcguire/BusinessCardsApp/
* Update: Above now redirects to a closed WIP, creating a flashcards app.
* Note: To run this project, you'll need to provide your own environment file for the API keys, as explained [here](https://angular.io/guide/build)... 

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
* Composite Firebase indices for search (unique, sorted, case insensitive)
* Firebase rules for unique users
* Google Analytics
    - Login event w/ user
    - Search event w/ query
    - Not found event
    - General view defaults

#### Behaviour

Upon loading the page, the visitor is directed to a list of their unique, sorted cards if logged in. Otherwise, they will be directed to a default landing page, blocked from visiting the other pages in the navigation toolbar.

Clicking the Credentials button in the toolbar opens a modal dialog whereby the user may authenticate with Firebase with Google or email/pass (with default account as required by the project).

From the Contacts page, the user may edit or delete cards.

The user may scan local or remote card images with Google's APIs, using vision to extract text and language tools to annotate with named entities (e.g., names, locations, organizations). The user is automatically redirected to the add card page, which is autofilled using annotations and custom conditionals. These fields may be cleared or accepted after review and possibly updated by using the full scanning results to make corrections. Upon acceptance, the user is directed to the cards display page.

The search page allows searching by first name or organization. Searches are trimmed and downcased, allowing for more robust results. Searches are confined to unique users, and sorted by timestamp (most recent at the top).

Logging out returns the user to the landing page, without access to the other routes.


#### Challenges

Perhaps unsurprisingly, most of the difficulty at this stage was views/CSS-related, as the core business logic services and controlling components were completed in preceding assignments, leaving most of the modifications to views and user interaction tailored around a new suite of features.

Integrating them for a new purpose, of course, entailed unique challenges, with a focus on desired functionality chief in mind--this challenge was also mitigated by a previous assignment (User Stories). A focus on user experience aided debugging while building out the functionalities and their integrated workflow.

Other difficulties included setting up Firebase rules and indices. Google's system (e.g., direct links to index compositing in the console) was very helpful in combining local and remote versions of the project files during development, though I confess to the occasional mishap (e.g. overwriting rules created in the console by neglecting to update the local file on redeployment; neglecting to update indices.json).

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
