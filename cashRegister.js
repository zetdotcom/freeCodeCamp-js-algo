function checkCashRegister(price, cash, cid) {

  let change = Number(cash - price); // return change value as Number
  let cidValues = cid.map((item) => item[1]); // iterates over cash-in-drawer values

  //sums all cash-in-drawer money
  let cidSum = cidValues.reduce(function (a, b) {
    let sum = a + b;
    return sum;
  })

  cidSum = Number(cidSum.toFixed(2)); // convert cid sum to Number with two decimals
  let output = {};

  const closed = () => {
    output = {
      status: "CLOSED",
      change: cid
    }
    return output
  }

  const insuffcient_funds = () => {
    output = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
    return output;
  }

  const open = () => {}

  if (change === cidSum) {
    closed();
  } else if (change > cidSum) {
    insuffcient_funds();
  } else {}

  console.log(output);
  return output;
}

// Example cash-in-drawer array: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME",
// 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY",
// 60], ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  [
    "PENNY", 1.01
  ],
  [
    "NICKEL", 2.05
  ],
  [
    "DIME", 3.1
  ],
  [
    "QUARTER", 4.25
  ],
  [
    "ONE", 90
  ],
  [
    "FIVE", 55
  ],
  [
    "TEN", 20
  ],
  [
    "TWENTY", 60
  ],
  ["ONE HUNDRED", 100]
]);