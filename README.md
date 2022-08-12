# Sagely Challenge

## Assumptions

- The data set is static. No modifications will be made to ths data file and, more importantly, the user of the website will not be modifying the data.
- The data need not be secured. It is ok for a user to have access to the entirety of the data on their local machine.
- The data is small. dataset.csv was 53.7 kb. It will not be a problem for the entirety of this data to be downloaded as part of the website.

## Non-Functional Requirements Assumed

- Since consistency of data is a non-issue, high availability and low latency are paramount.
- Speed of navigation between pieces of data displayed is high priority.

## Architectural Decisions

- Since there are no security requirements, the data will not change, and the dataset is small, it is not necessary to store the data in a separate server queried by the website. The data can be stored as a JSON blob within the code of the website.
- Since loading time is paramount, I will avoid using any complex front end frameworks like React or Vue, as they are far heavier than needed for such a simple web page and will slow loading time.
- I will use Bootstrap for ease of styling.
- 