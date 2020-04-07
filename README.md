# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## header component

Pass a description to display. Field name is "header".

## table component

Table has 3 variable that need to be passed in.

### data

"data" is the response object from the API call.

### allColumnNames

"allColumnNames" these are just the names that are defined in Sitecore list. 
The Sitecore list of columns should be all columns that can potentially be displayed from the API response object.

### selectedColumns

"selectedColumns" are the columns that will be displayed in the table view. The selectedColumns must have properties of: name, label, type. 
Valid types are: boolean, currency, date, decimal, number, & percent.
The selectedColumns are all the columns that are marked as selected in the Sitecore list.

## Pre-Build Steps

1) You must remove the library build files (header, table) from the package.json in the root and then run "npm i -f".
    (Save this in the clip board it is needed in step 3)
2) Run "npm run all". This step will build the libraries that are needed to build the base application.
3) Restore the libaries saved in the clip board to the package.json file in the root and then run "npm i -f"
4) The application should be built. You can now run "npm start" or "npm run build".

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
