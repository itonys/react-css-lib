# CSS Library Project
This project builds a CSS library and includes samples for both React and Vue to demonstrate its usage.

## Directory Structure
The project is organized into the following directories:

- src/: Contains the source files for the CSS library.
- dist/: Contains the built CSS library. This directory is created when the CSS library is built.
- sample-react/: Contains a sample project demonstrating the CSS library in a React application.
- sample-vue/: Contains a sample project demonstrating the CSS library in a Vue application.


## Building the CSS Library
To build the CSS library from the source files, run the following command from the root directory of the project:

```
yarn build
```

## Running the Samples
1. Navigate to the sample-react or sample-vue directory and install the dependencies:

```
cd sample-react
yarn install
```

or

```
cd sample-vue
yarn install
```

2. Start the development server:

```
yarn start
```

### Note
When you run yarn start in the sample applications, the CSS library from the built dist/ directory will be automatically copied to the appropriate location in the sample projects. This ensures that the necessary stylesheets are properly applied during development.
