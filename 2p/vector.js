class Vector {
    constructor(data) {
      this.data = data;
    }  
    sum(vector) {
      return this.data.map((item, i) => item + vector[i]);
    }
  
    subt(vector) {
      return this.data.map((item, i) => item - vector[i]);
    }
  
    mul(vector) {

      return this.data.map((item, i) => item * vector[i]);
    }
  
    getVector() {
      return this.data;
    }
}

const a = [1,2,3,4,5,6];  
const b = [2,2,2,2,2,2];
const c = [9,8,7,6,5,4];

const test = new Vector(a);

console.log("Suma " + test.sum(b));
console.log("Resta " + test.subt(b));
console.log("Multiplicacion " + test.mul(b));