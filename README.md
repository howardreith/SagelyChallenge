# Sagely Challenge

## Procedures

### Running the App Locally

1. Install dependencies with `npm install`.
2. Build the project with `npm run build`.
3. Start the local dev server with `npm run start`. This will open the web page
at localhost:8080. Alternatively you can simply open `./dist/index.html` in your browser.

### Running Tests

1. After dependencies are installed (see above), run `npm run test`.
2. If you'd like to run the airbnb linter, run `npm run lint`.

### Data Transformation

This app has already transformed the downloaded contents of dataset.csv into the json file [./src/dataset.json](./src/dataset.json).
This was achieved by uploading it in https://www.convertcsv.com/csv-to-json.htm
Essentially, all headings have been turned into keys in objects in an array. If you'd like
me to describe how I'd do this in a JS script instead, I've added the csv plugin to webpack
and we can go over an approach in our discussion.

## Architecture Discussion

### Assumptions

- The data set is static. No modifications will be made to ths data file and, more importantly, the user of the website will not be modifying the data.
- The data need not be secured. It is ok for a user to have access to the entirety of the data on their local machine.
- The data is small. dataset.csv was 53.7 kb. It will not be a problem for the entirety of this data to be downloaded as part of the website.

### Assumed Non-Functional Requirements

- Since consistency of data is a non-issue (since there will be no updates), high availability and low latency are paramount.
- Speed of navigation between pieces of data displayed is high priority.

### Resulting Structural Architectural Decisions

#### Guiding principle: The design should be the simplest solution that meets our needs.

"The name of the game is congruence. The techniques you employ had better be consistent with the intrinsic complexity of the problem you're trying to solve." (Plauger, The Falutin' Index)

- Since there are no security requirements, the data will not change, and the dataset is small, it is not necessary to store the data in a separate server queried by the website. The data can be stored as a JSON blob within the front end.
- Since loading time is paramount, I will avoid using any complex front end frameworks like React or Vue, as they are far heavier than needed for such a simple web page and will slow loading time. I will build this application with vanilla JS (with webpack and the latest ES)
- I will use Bootstrap for some basic styling so it doesn't look awful.
- For testing, I will use DOM Testing Library 'cause it's lightweight, sufficient, and much faster and easier than Cypress or some Selenium wrapper.
- I will use Webpack for access to ES8, compression, and easier deployment.

## Additional Discussion

- I considered pagination for the table, but since the data set is so small,
such UI seemed more cumbersome than simply allowing the user to scroll.
- I added a full text search functionality if the user has some idea what they're
looking for.
- If any of my assumptions above are incorrect (data will be changing, it must be secured, etc.)
I would be happy to discuss how I would alter my architecture.