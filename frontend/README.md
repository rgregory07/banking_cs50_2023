# Personal Finance App - CS50 Final Project

#### Video Demo: <URL HERE>

#### Description: This web app was created for tracking and categorizing personal finances.

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

Bank data is displayed in a table using AG-Grid

### Manual Transaction Entry

### CSV Upload

### Charts

## Future Features

### User Model

I have started working on a user model in order to provide login/privacy. The Front End logic has been written and does include authorization, errors, etc, but I have not yet created a proper user model, which will also require some refactoring of the bank data to keep it related to a specific user.

### Custom Category Names

Currently the Category and Subcategory lists are hard coded. I plan to add the ability for the end user to customize the list to fit their own personal needs.

### Customize Dashboard

I plan to give the end user the ability to customize the dashboard to sort and display the Categories or their choosing.
