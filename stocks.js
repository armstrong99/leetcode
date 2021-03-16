const maxProfit = (prices) => {
   
    if(prices === null || prices.length <= 1) {
        return 0;
    }
 
    let totalProfit = 0;
    let stop = true;
    let pointer = 0;
    let bought = 0; // 1
    let sold = true;
 
    while(stop) {
         //i bought
      if(sold && prices[pointer + 1] < prices[pointer] || sold && prices[pointer] < prices[pointer + 1] ) {
          bought = prices[pointer + 1] < prices[pointer] ? prices[pointer + 1] : prices[pointer];
          sold = false;
          pointer++;
       } 

       //i sell
    if(prices[pointer + 1] > bought) {
        sold = true;
        totalProfit += (prices[pointer + 1] - bought);
        bought = prices[pointer + 1];
        pointer++; 
    }

    if(!sold) {
        pointer++ 
    }
    
    if(prices[pointer + 1] === undefined) {
        stop = false;
    }

   }

   return totalProfit
}

 let res = maxProfit([7,6,4,3,1])

 console.log(res)