# Sagely Challenge

## Procedures

### Running the App Locally

1. Install all dependencies with `npm install`.
2. Build the project with `npm run build`.
3. Open index.html by clicking [this link](./dist/index.html).

### Running Tests

1. After dependencies are in stalled (see above), run `npm run test`.

### Data Transformation

This app has already transformed the downloaded contents of dataset.csv into the json file [./src/dataset.json](./src/dataset.json).
This was achieved by uploading it in https://www.convertcsv.com/csv-to-json.htm
Essentially, all headings have been turned into keys of objects in an array. If you'd like
me to describe how I'd do this in a JS script instead, I can describe as much.

## Architecture Discussion

### Assumptions

- The data set is static. No modifications will be made to ths data file and, more importantly, the user of the website will not be modifying the data.
- The data need not be secured. It is ok for a user to have access to the entirety of the data on their local machine.
- The data is small. dataset.csv was 53.7 kb. It will not be a problem for the entirety of this data to be downloaded as part of the website.

### Assumed Non-Functional Requirements

- Since consistency of data is a non-issue, high availability and low latency are paramount.
- Speed of navigation between pieces of data displayed is high priority.

### Resulting Structural Architectural Decisions

- Since there are no security requirements, the data will not change, and the dataset is small, it is not necessary to store the data in a separate server queried by the website. The data can be stored as a JSON blob within the front end.
- Since loading time is paramount, I will avoid using any complex front end frameworks like React or Vue, as they are far heavier than needed for such a simple web page and will slow loading time. I will build this application with vanilla JS (with webpack and the latest ES)
- I will use Bootstrap for some basic styling so it doesn't look awful.
- For testing, I will use DOM Testing Library 'cause it's lightweight, sufficient, and much faster and easier than Cypress or some Selenium wrapper.
- I will use Webpack for access to ES8, compression, and easier deployment.