# 2021 Exploratory CircleCi Project 
Created by Mary Crawford

This project is using CircleCi to create a CICD pipeline for an application which builds and tests a webpage button.  

Though a test could have been done on the html document itself, this is not hte best practice.  Instead, it is a better practice to create a separate unit test, as well as, ensure your code has (or close to) 110% code coverage.


### Getting Started

You can clone the project from the following Github repository:

You will need to run the following commands in order to run the project

`npm init`
`npm install -g jest`
`npm i --save-dev @types/node`

After you run these commands you will see the `node_modules` folder.

To run the test, you can use `npm run test`.  If you run this command, you will see the test is currently failing and a chart showing you 100% code coverage.

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
The gist is a snapshot of what the code may look like in an IDE.  The only difference is it only contains the files and not the folder configurations in which the files were created.  For instance, the `config.yml` file is in the `.circle.ci` folder.  You can find the Github `circleci` project here https://github.com/marycrawford/circleci.