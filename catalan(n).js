const fact = (n) => {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}


const cat = (n) => { 
    return fact(2 * n) / (fact(n+1) * fact(n))
}

let n = 10
let catalan = []
for(let i = 1; i <= n; i++) {
    catalan.push(cat(i))
}

console.log(catalan)