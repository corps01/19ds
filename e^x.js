const fac = num => {
    let total = 1;
    for(let i=1; i<=num; i++){
            total = total * i
    }
    return total
}

let total = 0
let x = 1

for(let i=0; i<= 9; i++){
     total += Math.pow(x,i)/fac(i)
}

console.log(total)
