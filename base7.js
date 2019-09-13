let result

const log7 = x => Math.log10(x)/Math.log10(7)

for(i=1;i<=10; i++){
    result = log7(i)
    console.log("log base 7: ("+ i +") = " +result)
}
