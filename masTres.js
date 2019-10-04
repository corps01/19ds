function masTres(n) {
    if(n === 0){
        return 3
    }

    if(n>=1){
    n = 2 * masTres(n-1)+3
    }

    return n
}
for(i=0;i<=10;i++){
console.log(i + "f(n) =" + masTres(i));
}