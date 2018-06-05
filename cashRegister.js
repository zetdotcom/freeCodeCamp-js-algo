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
    let hundreds,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickiels,
      pennies;
    cid.map((item) => {
      if (item[0] == "ONE HUNDRED") {
        hundreds = item[1] / 100;
        changeGiven.push(hundreds);
      } else if (item[0] == "TWENTY") {
        twenties = item[1] / 20;
        changeGiven.push(twenties);
      } else if (item[0] == "TEN") {
        tens = item[1] / 10;
        changeGiven.push(tens);
      } else if (item[0] == "FIVE") {
        fives = item[1] / 5;
        changeGiven.push(fives);
      } else if (item[0] == "ONE") {
        ones = item[1] / 1;
        changeGiven.push(ones);
      } else if (item[0] == "QUARTER") {
        quarters = item[1] / 0.25;
        changeGiven.push(quarters);
      } else if (item[0] == "NICKEL") {
        nickiels = item[1] / 0.05;
        changeGiven.push(nickiels);
      } else if (item[0] == "DIME") {
        dimes = item[1] / 0.10;
        changeGiven.push(dimes);
      } else if (item[0] == "PENNY") {
        pennies = item[1] / 0.01;
        changeGiven.push(pennies);
      }
    })
    /*
    for (let i = cid.length - 1; i >= 0; i--) {

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
    */

    // ------------ display change and checks DO NOT CHANGE --------

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

checkCashRegister(3.26, 450, [
  [
    "PENNY", 1.03
  ],
  [
    "NICKEL", 2.1
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
  ["ONE HUNDRED", 500]
]);