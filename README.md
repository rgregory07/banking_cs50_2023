# Personal Finance Tracker - CS50 Final Project

#### Video Demo: <URL HERE>

#### Description:

This web app was created for tracking and categorizing personal finances. I created it to assist with doing my taxes. Having 4 sources of income & expenses, it can get tricky keeping track of everyting. I was used to use Quickbooks Online and it was very helpful. That is why I created this app, as a challenge for myself, while also creating something I will actully use on a regular basis.

Since this was a learning experiment, the entire site is not totally consistent. Some sections use MUI Box & Typography with inline styling, and others use div and className. I like to experiment.

## How it's made

The Backend was created using Django, manly for creating models, serializers, and APIs with the Database.

The Database was created using PostreSQL

The Frontend uses React which does the majority of the heavy lifting. I did use some MUI Material elements including the sidebar/drawer, and all the icons.

The Bank Data page uses AG-Grid for displaying all the information, with some customized columns to dynamically set categories and subcategories, along with adding notes. The date/description/amount cannot be edited, this is to avoid making any mistakes by accident and overwiting the database with incorrect information.

The Chart visualizations were brought to life using Nivo. https://nivo.rocks/

The CSV upload page uses Papaparse for parsing the data to be displayed.

I used SASS for most of the CSS (some inline) and I used CSS Variables for most colors so it can be updated easily.

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

Drag and Drop a csv file from your bank account into the app. Before committing this to the database, you can view the transactions and delete any unwanted rows, and finally save to the database when ready.

### Charts

A few charts to help visualize income vs expenses, or a breakdown of each expense or income per month.

## Future Features

### Custom User Model

I have started working on a user model in order to provide login/privacy. The Front End logic has been written and does include password validation using REGEX, errors, etc, but I have not yet created a proper user model, which will also require some refactoring of the bank data to keep it related to a specific user.

### Autentication

I will be adding proper JWT authentication through React that will use Access Tokens to ensure the signed in user only has access to the data/pages they are supposed to.

### Custom Category Names

Currently the Category and Subcategory lists are hard coded. I plan to add the ability for the end user to customize the list to fit their own personal needs.

### Customize Dashboard

I plan to give the end user the ability to customize the dashboard to sort and display the Categories or their choosing.

### Dark Mode

Cause who doesn't love dark mode.
