function convertToRoman(num) {

  let str = num.toString();
  let splitArr = str.split("");
  let roman;
  let romanArr = [];
  function units(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "I";
        break;
      case "2":
        roman = "II";
        break;
      case "3":
        roman = "III";
        break;
      case "4":
        roman = "IV";
        break;
      case "5":
        roman = "V";
        break;
      case "6":
        roman = "VI";
        break;
      case "7":
        roman = "VII";
        break;
      case "8":
        roman = "VIII";
        break;
      case "9":
        roman = "IX";
        break;
      case "10":
        roman = "X";
        break;
    }

    return roman;
  }

  function tens(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "X";
        break;
      case "2":
        roman = "XX";
        break;
      case "3":
        roman = "XXX";
        break;
      case "4":
        roman = "XL";
        break;
      case "5":
        roman = "L";
        break;
      case "6":
        roman = "LX";
        break;
      case "7":
        roman = "LXX";
        break;
      case "8":
        roman = "LXXX";
        break;
      case "9":
        roman = "XC";
        break;
    }
    return roman;
  }

  function hundreds(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "C";
        break;
      case "2":
        roman = "CC";
        break;
      case "3":
        roman = "CCC";
        break;
      case "4":
        roman = "CD";
        break;
      case "5":
        roman = "D";
        break;
      case "6":
        roman = "DC";
        break;
      case "7":
        roman = "DCC";
        break;
      case "8":
        roman = "DCCC";
        break;
      case "9":
        roman = "CM";
        break;
    }

    return roman;
  }

  function thounsands(arg) {
    switch (arg) {
      case "0":
        roman = "";
        break;
      case "1":
        roman = "M";
        break;
      case "2":
        roman = "MM";
        break;
      case "3":
        roman = "MMM";
        break;

    }

    return roman;
  }

  if (num >= 1000) {
    let al = splitArr.length;

    romanArr.push(thounsands(splitArr[al - 4]), hundreds(splitArr[al - 3]), tens(splitArr[al - 2]), units(splitArr[al - 1]));

  }

  if (num >= 100 && num < 1000) {
    let al = splitArr.length;

    romanArr.push(hundreds(splitArr[al - 3]), tens(splitArr[al - 2]), units(splitArr[al - 1]));

  }
  if (num < 100 && num > 10) {
    let al = splitArr.length;

    romanArr.push(tens(splitArr[al - 2]), units(splitArr[al - 1]));

  }

  if (num < 10) {
    let al = splitArr.length;

    romanArr.push(units(splitArr[al - 1]));

  }

  return romanArr.join("");

}
const input = document.getElementById("inputField");
const text = document.getElementById("text");
document
  .getElementById("romanConverter")
  .onclick = function (e) {
  e.preventDefault();
  text.innerHTML = convertToRoman(input.value);
}
