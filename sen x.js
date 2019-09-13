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

const senX = (x) => {
  let sum = 0;
  let top = 12
  for (let i = 1, c = 1; c <= top; i += 2, c++) {
    sum += flipsign(c) * (Math.pow(x, i) / fac(i));
  }
  return sum;
};

console.log(senX(10));