const fact = (n) => {
    let r = 1
    for (let i = 1; i<=n; i++) {
        r = r * i
    } 

    return r
}
console.log(fact(prompt("ingresa un numero")))