function telephoneCheck(str) {

  // Good luck!
  let phoneNum = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\s?\d{3}[\s-]?\d{4}$/;
  let check = phoneNum.test(str);
  let matchCheck = str.match(phoneNum);
  return check;

}

telephoneCheck("5555555555");
console.log(telephoneCheck("1 555)555-5555"))