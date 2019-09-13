let a = 2;
let n = 10;
let sumador = 0


for (let i = 0; i <= n; i++) {
    sumador += Math.pow(a, i);
}


console.log(sumador)
console.log("FORUMLA = " + (Math.pow(a, n + 1) - 1) / (a - 1))
