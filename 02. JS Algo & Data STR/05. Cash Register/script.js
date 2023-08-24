function checkCashRegister(price, cash, cid) {
    // Define the denominations and their values
    const denominations = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
   
    let change_due = cash - price;
    let change = [];
  
    // Calculate the total cash in the drawer
    let total_cid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    // Handle insufficient funds or exact change situation
    if (total_cid < change_due || total_cid === change_due) {
      if (total_cid < change_due) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "CLOSED", change: cid };
      }
    }
  
    // Iterate through the denominations in reverse order
    for (let i = denominations.length - 1; i >= 0; i--) {
      let denomination_name = denominations[i][0];
      let denomination_value = denominations[i][1];
      let amount_in_drawer = cid[i][1];
      let amount_to_return = 0;
  
      // Keep adding the denomination's value until it's exceeded or not available
      while (amount_in_drawer >= denomination_value && change_due >= denomination_value) {
        amount_in_drawer -= denomination_value;
        change_due -= denomination_value;
        amount_to_return += denomination_value;
  
        // Round amount_in_drawer to fix precision issues while subtracting
        amount_in_drawer = Math.round(amount_in_drawer * 100) / 100;
      }
  
      if (amount_to_return > 0) {
        change.push([denomination_name, amount_to_return]);
      }
    }
  
    // If change_due remains after using all denominations, return insufficient funds
    if (change_due > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
} 