const fac = num => {
    let total = 1;
    for(let i=1; i<=num; i++){
            total = total * i
    }
    return total
}

//alternacion de signos
const flipsign = i => {
  if (i % 2 === 0) return -1;
  else return 1;
};

const cosX = (x) => {
  let sum = 1
  let top = 12

  for (let i = 2, c = 2; c <= top; i += 2, c++) {
    sum += flipsign(c) * (Math.pow(x, i) / fac(i));
  }
  return sum;
};

console.log(cosX(10));