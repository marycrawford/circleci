# 2021 Exploratory CircleCi Project 
Created by Mary Crawford

This project is using CircleCi to create a CICD pipeline for an application which builds and tests a webpage button.  

Though a test could have been done on the html document itself, this is not a good practice.  Instead, it is better to create a separate unit test, as well as, ensure your code has (or close to) 110% code coverage.


### Getting Started

You can clone the project from the following Github repository https://github.com/marycrawford/circleci.

Then run these commands:

`npm init`
`npm install -g jest`
`npm i --save-dev @types/node`

You will now see the `node_modules` folder.

To run the test, you can use `npm run test`.  If you run this command, you will see the test passes and the chart shows you 100% code coverage.

```
 > circleci@2.1.0 test
> jest

 PASS  ./button.test.js
  ✓ change text when button is clicked (2 ms)

-|---------|----------|---------|---------|-------------------
 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-|---------|----------|---------|---------|-------------------
 |     100 |        0 |     100 |     100 |                   
  |     100 |        0 |     100 |     100 | 2                 
-|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.607 s
Ran all test suites.
```



### Gist
The gist is a snapshot of what the code may look like in an IDE.  The only difference is it only contains the files uploaded.  Normally these are the most relevant files or notes.  So some essential paths may be omitted.  For instance, the `config.yml` file is in the `.circle.ci` folder.  You can find the Github `circleci` project here https://github.com/marycrawford/circleci.

## Successful build 
A successful CircleCi build can be found at https://app.circleci.com/pipelines/github/marycrawford/circleci/33/workflows/036593bb-3eda-43ef-bff9-8c0a0bd24788/jobs/33.

The initial successful build was a copy of `say-hello-workflow` template to see how CircleCi worked. See https://app.circleci.com/pipelines/github/marycrawford/circleci/1/workflows/97cb8e15-32aa-46cc-9ba7-730406d105a4/jobs/1.  Then I began investigating how CircleCi could actually be used for the given project and unit test (See https://app.circleci.com/pipelines/github/marycrawford/circleci/14/workflows/da4b7d15-06f9-41e6-95e3-cef25bd2720a/jobs/14 - using split to learn about how to run test in parallel).