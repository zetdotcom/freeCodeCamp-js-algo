function checkCashRegister(price, cash, cid) {

  const changeOutput = document.getElementById("changeOutput");

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

  const open = () => {
    output = {
      status: "OPEN",
      change: []
    }
    let changeGiven = [];

    // while (changeGiven < change) {   cid.map((item) => {     item.map((money) =>
    // {       changeGiven.push(money);     })   }) }
    for (let i = cid.length - 1; i >= 0; i--) {
      // changeGiven.push(cid[i][1]);
      let remaining;
      if (cid[i][1] > change) {
        changeGiven;
      } else if (change > cid[i][1]) {
        changeGiven.push(cid[i]);
        remaining = change - cid[i][1];
      } else if (cid[i][1] > remaining && remaining > 0) {
        changeGiven.push(cid[i][0], remaining)
        remaining = 0;
      } else {
        changeGiven.push(cid[i]);
        remaining -= cid[i][1];
      }

    }

    // changeGiven = Math   .max   .apply(null, cidValues); ------------ display
    // change and checks DO NOT CHANGE --------

    output.change = changeGiven;
    let changeGivenArr = changeGiven.map(item => item[1]);
    let changeGivenSum = changeGivenArr.reduce(function (a, b) {
      let sum = a + b;
      return sum;
    })
    let changeCheck = changeGivenSum - change;

    // output.change += ` change: ${change}`;

    changeOutput.innerHTML = `${JSON.stringify(changeGiven)} <br/> change: ${change} <br/> change given sum: ${changeGivenSum} <br/> check: ${changeCheck} `;
    return output;

    // ------------ display change and checks DO NOT CHANGE --------

  }

  if (change === cidSum) {
    closed();
  } else if (change > cidSum) {
    insuffcient_funds();
  } else {
    open();
  }

  console.log(output);
  return output;
}

// Example cash-in-drawer array: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME",
// 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY",
// 60], ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [
  [
    "PENNY", 1.03
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