// Solving the problem: Minimized getting damage when Finalize savings accounts before maturity.

// Assume accounts is the list of your savings accounts
// An account has its "id", current money "balance", the money value that you "lost" if finalizing it today
// The last is "targetBalance" that you want to get from your savings accounts

accounts = [
    {id: '1013037787', balance: 4600000, lost: 14631.7808219178},
    {id: '1013007483', balance: 4784421, lost: 15782.0352986301},
    {id: '14601102460789', balance: 4421666, lost: 16335.9358931507},
    {id: '14601098965102', balance: 16118140, lost: 31132.2978082192},
    {id: '14601096624014', balance: 10644550, lost: 31525.365890411},
    {id: '14601098222584', balance: 13855000, lost: 32113.2328767123},
    {id: '14601097723229', balance: 14000000, lost: 36054.7945205479},
    {id: '1012455874', balance: 13367000, lost: 42518.0465753425},
    {id: '14601103480351', balance: 15000000, lost: 43952.0547945206},
    {id: '14602048324374', balance: 14854875, lost: 44462.8792808219},
    {id: '14601103063155', balance: 15000000, lost: 49684.9315068493},
    {id: '14601103062485', balance: 20000000, lost: 66246.5753424658},
]
targetBalance = 40000000;

///////////////////////////////////////////////////////////////////
W = accounts.reduce((total, account) => total + account.balance, 0) - targetBalance;
knapSackResult = knapSack(W, accounts, accounts.length);
finalResult = accounts.filter(account => !knapSackResult.accounts.includes(account));
console.log(finalResult);

///////////////////////////////////////////////////////////////////
function knapSack(W, accounts, n) {
    
    // Base Case
    if (n == 0 || W == 0) return {accounts: [], totalLost: 0};

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

        if (_way1.totalLost > _way2.totalLost) {
            return _way1;
        } else {
            return _way2;
        }
    }
}