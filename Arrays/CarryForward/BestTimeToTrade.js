// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Return the maximum possible profit.

const stockToBuy = (A) =>{
    let profit =0, N= A.length;
    let stockToBuy =A[0];
    for(let i=1; i<N; i++){
        if(stockToBuy > A[i]){
            stockToBuy = A[i];
        }
        const currentProfit = A[i] - stockToBuy;
        if(currentProfit > profit ) {
            profit = currentProfit;
        }
    }
    console.log(stockToBuy)
    return profit;
}
 
console.log(stockToBuy([ 4, 5, 2, 4, 19]))