# Smart Finalize Savings Accounts 
![](https://img.shields.io/badge/version-1.1-brightgreen) ![](https://img.shields.io/badge/node-v12.15.0-red)

Minimized interest lost when finalizing savings accounts before maturity when you need money for other purposes.

*Using Knapsack problem algorithm

## Require
* node.js (don't have?, download it here: https://nodejs.org/en/download/)

## Usage
### Prepare input file
Set **all your savings accounts** and **targetBalance** in `input.js` file

Each of your savings account has its own:
* **id** (Optional): Your savings account ID
* **balance** (Require): The current balance of the savings account
* **lost** (Require): The interest money value that you will "lost" if finalizing it today

### Run
```console
node app.js
```
The result will be the list of all savings accounts need finalizing for you

## Example
#### Input (input.js)
```javascript
// All your savings accounts info
exports.accounts = [
    {id: '1013037787',     balance: 4600000,  lost: 14631},
    {id: '1013007483',     balance: 4784421,  lost: 15782},
    {id: '14601102460789', balance: 4421666,  lost: 16335},
    {id: '14601098965102', balance: 16118140, lost: 31132},
    {id: '14601096624014', balance: 10644550, lost: 31525},
    {id: '14601098222584', balance: 13855000, lost: 32113},
    {id: '14601097723229', balance: 14000000, lost: 36054},
    {id: '1012455874',     balance: 13367000, lost: 42518},
    {id: '14601103480351', balance: 15000000, lost: 43952},
    {id: '14602048324374', balance: 14854875, lost: 44462},
    {id: '14601103063155', balance: 15000000, lost: 49684},
    {id: '14601103062485', balance: 20000000, lost: 66246},
];

// The "targetBalance" that you want to get from your savings accounts
exports.targetBalance = 60000000;
```
#### Result (after run: node app.js)
```javascript
[
  { id: '1013037787', balance: 4600000, lost: 14631 },
  { id: '14601098965102', balance: 16118140, lost: 31132 },
  { id: '14601096624014', balance: 10644550, lost: 31525 },
  { id: '14601098222584', balance: 13855000, lost: 32113 },
  { id: '14601103480351', balance: 15000000, lost: 43952 }
]
```
So, you need to finalize these 5 savings accounts to get 6000000 for your purposes at minimum interest lost.
