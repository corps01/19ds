class Factorial {
    constructor(num){
      this.num = num
    }
    
    getValue(num=this.num) { 
      function value(num){
      return num<=1 ? 1:  num*value(num-1)
      }
      return value(num);
    }
  
    getCost(num=this.num) {
         let cont=0;
         function value(num){
          if(num <=1){
            cont++;
            return num;
          } else{
            cont++;
            return num*value(num-1);
          }
         }
         value(num);
         return cont;
    }
    
    getSuccesion() {
        let succesion = []
        for (let i = 1; i <= this.num; i++) {
          succesion.push(this.getValue(i));
        }

        return succesion;
      }
    
      getTable() {
        let cost = []
        for (let i = 0; i <= this.num; i++) {
          cost.push(this.getCost(i));
        }

        return console.log("COSTO:" + cost + '\n' + 'VALUE' + this.getSuccesion());
    }
  }


let test1 = new Factorial(7)

console.log(test1.getSuccesion())

console.log(test1.getTable())

