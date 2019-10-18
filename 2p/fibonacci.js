class Fibonacci {
    constructor(n) {
        this.n = n;
    }

    getValue(n = this.n) {
        function value(n){
            if(n < 2){
                return n;
            } else {
                return value(n-1) + value(n-2);
            }
        }
        return value(n);
    }
    
    getCost(n = this.n) {
        let cont = 0;
        function value(n){
            if(n < 2){
                cont++;
                return n
            } else {
                cont++;
                return value(n-1) + value(n-2);
            }
        }

        value(n);
        return cont;
    }


    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }


    getTable() {
    let cost = []
    let value = []


        for(let i = 0; i <= this.n; i++){
            cost.push(this.getCost(i));
            value.push(this.getValue(i));
        }

        return console.log('COST:' + cost + '\n' + 'VALUE:' + value)
    }

}

let numero = new Fibonacci(7);

console.log(numero.getValue());
console.log(numero.getSucesion());

console.log(numero.getTable());