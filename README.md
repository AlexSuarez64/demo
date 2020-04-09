# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Pre-Build Steps

1. Remove the enteries in the dependencies section "header" & "table" from the package.json in the root. (Cut to clip board, needed in step 5)
2. Then run "npm install".
3. Then run "mkdir libs"
4. Run "npm run all". This step will build the libraries that are needed to build the base application.
5. Restore the enteries in the dependencies section "header" & "table" to package.json in the root.
6. Then run "npm install"
7. Then run "npm start" or "npm run build".

## Components

## header component

Pass a description to display. Field name is "header".

## table component

Table has 4 variable that need to be passed in.

### data

"data" is the response object from the API call.

### allColumnNames

"allColumnNames" these are just the names that are defined in Sitecore list.
The Sitecore list of columns should be all columns that can potentially be displayed from the API response object.

### selectedColumns

"selectedColumns" are the columns that will be displayed in the table view. The selectedColumns must have properties of: name, label, type.
Valid types are: boolean, currency, date, decimal, number, & percent.
The selectedColumns are all the columns that are marked as selected in the Sitecore list.

### model

"model" is the model that was selected to display.
