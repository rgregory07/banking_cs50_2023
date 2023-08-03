# Personal Finance App - CS50 Final Project

#### Video Demo: <URL HERE>

#### Description:

This web app was created for tracking and categorizing personal finances.

## Overview

This Personal Finance App is built using React / Django / PostgreSQL.

## About The Project

I used to use Quickbooks Online for tracking my finances, and it was a very helpfull tool in order to see Income/Expense amounts. I also used it for tax season to organize expenses. That is why I created this app, as a challenge for myself, while also creating something I will actully use on a regular basis.

This app does not have all the functionality of Quickbooks. There is a lot of room to expand but this is at a stage that meets my needs.

## Features

- Dashboard
- Sort by Date Range
- Add Categories & Subcategories to each transaction
- Manually Input Transactions
- Upload CSV Data from Bank Accounts
- Multiple Charts for viewing data

### Dashboard

The Dashboard gives a quick overview of Income & Expense totals. The default use every transaction in the database, but you can also filter by date range.

- **Date Range Picker** uses the Material MUI Date Picker Component.

- **Total Income** sums all income sources
- **Savings** sums all transactions in the Savings Category
- T-Shirt Company
  - **Income** sums all transactions from the Income Category, and Pebbles & Pine sub-category
  - **Expenses** sums all transactions in the Pebbles & Pine category
  - **Profit/Less** sums the difference between **Income** & **Expenses**. The color will also adjust to be green if the number is > 0, and red if it is < 0
- Daycare
- **Parent 1/2/3** sums the total of each daycare parent
- **Total** sums all daycare income from all parents

### Cateegorize Bank Data

Bank data is displayed in a table using AG-Grid. It includes the ability to sort and filter each column. The only columns that allow editing of information are Category, Subcategory, and Notes.

Any transaction that does not have a Category & Subcategory will not be included in any of the reporting data discplayed on the dashboard or charts.

As a safety measure, there is no option to delete rows from the grid, as it would also permanetly delete them from the database. Instead, under the Misc category, there is an Ignore Subcategory. There is also the option to just leave the Category & Subcategory blank.

### Manual Transaction Entry

If you need to add a transaction that is not on your bank statements (eg. cash transaction), you can enter the details from this page. It also allowes you to select the proper Categorizations so you don't have to add it in the table after.

### CSV Upload

Drag and Drop a csv file from your bank account into the app, and you can view the transactions, delete unwanted rows, then save to the database.

### Charts

A few charts to help visualize income vs expenses, or a breakdown of each expense or income per month.

## Future Features

### User Model

I have started working on a user model in order to provide login/privacy. The Front End logic has been written and does include authorization, errors, etc, but I have not yet created a proper user model, which will also require some refactoring of the bank data to keep it related to a specific user.

### Custom Category Names

Currently the Category and Subcategory lists are hard coded. I plan to add the ability for the end user to customize the list to fit their own personal needs.

### Customize Dashboard

I plan to give the end user the ability to customize the dashboard to sort and display the Categories or their choosing.
