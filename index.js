function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  let a = n;
  a += 1;
  return a;
}

function decrement(n) {
  return (n -= 1);
}

function makeInt(n) {
  //let re = /^[A-Za-z]+$/;
  //   if (!re.n) {
  //     return n;
  //   } else if (re.n) {
  //     let na = n.substring(0, 1);

  //     return na;
  //   }
  //let na = Number(n);
  // parseInt("2", 10);
  let na = parseInt(n, 10);
  //console.log(na);
  //   if (na == 0) {
  //     // let na = n.substring(0, 1);

  //     return na;
  //   } else {
  return na;
  // }
}

function preserveDecimal(n) {
  let an = parseFloat(n);
  return an;
}
