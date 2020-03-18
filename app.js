const { accounts, targetBalance } = require("./input");

/*---------------------------------------------------------------------*/
var W = accounts.reduce((total, account) => total + account.balance, 0) - targetBalance;
var knapSackResult = knapSack(W, accounts, accounts.length);
var finalResult = accounts.filter(account => !knapSackResult.accounts.includes(account));

console.log(finalResult);
var finalLost = finalResult.reduce((total, account) => total + account.lost, 0);
console.log("finalLost = " + finalLost);

/*---------------------------------------------------------------------*/
function knapSack(W, accounts, n) {
    
    // Base Case
    if (n == 0 || W == 0) return { accounts: [], totalLost: 0 };

    // If weight of the nth item is more than Knapsack of capacity 
    // W, then this item cannot be included in the optimal solution
    if (accounts[n-1].balance > W) {
        return knapSack(W, accounts, n-1);
    } else {
        // # return the maximum of two cases: 
        // # (1) nth item included 
        // # (2) not included
        let _way1 = knapSack(W - accounts[n-1].balance, accounts, n-1);
        _way1.accounts.push(accounts[n-1]);
        _way1.totalLost += accounts[n-1].lost;
        let _way2 = knapSack(W, accounts, n-1);

        return _way1.totalLost > _way2.totalLost ? _way1 : _way2;
    }
}