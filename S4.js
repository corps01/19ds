let sumador = 0
let k = prompt("ingresa K")
for(let i=1;i<=10;i++){
    sumador += Math.pow(i,k)
}
console.log(sumador)
console.log("FORMLA = " + (1/k+1)* Math.pow(10,k+1))
