let result

const log7 = (x,y) => Math.log10(x)/Math.log10(y)
const base = prompt("Ingresa la base")

for(i=1;i<=10; i++){
    result = log7(i,base)
    console.log("log base " + base + "= (" + i + ") = " +result)
}
