const fact = (n) => {
    let r = 1
    for (let i = 1; i<=n; i++) {
        r = r * i
    } 

    return r
}

const P = (n, r) => {
    return (fact(n))/fact((n-r))
}

const C = (n, r) => {
    return P(n, r) / fact(r)
}

console.log(C(10, 5))