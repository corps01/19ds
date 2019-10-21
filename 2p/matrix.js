class Matrix{
    constructor(r, c) {
      this.r = r;
      this.c = c;
      this.d = this.init();
    }
  
    init() {
      const temp = [];
  
      for (let i = 0; i < this.r; i++) {
        temp[i] = new Array(this.c);
  
        for (let j = 0; j < this.c; j++) {
          temp[i][j] = 0;
        }
      }
  
      return temp;
    }
  
    initRandom() {
      for (let i = 0; i < this.r; i++) {
        this.d[i] = new Array(this.c);
  
        for (let j = 0; j < this.c; j++) {
          this.d[i][j] = (Math.round (Math.random () * 10));
        }
      }
  
      return this.d;
    }
  
    getRow(r) {
      
  
      return this.d[r];
    }
  
    getColumn(c) {
      const temp = [];
  
      
  
      for (let i = 0; i < this.r; i++) {
        temp.push(this.d[i][c]);
      }
  
      return temp;
    }
  
    isSquared() {
      if (this.c === this.r) {
        return true;
      }
  
      return false;
    }
  
    isSymmetric() {
      this.isSquared();
  
      for (let i = 0; i < this.r; i++) {
        for (let j = 0; j < this.c; j++) {
          if (this.d[i][j] != this.d[j][i]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    isIdentity() {
      this.isSymmetric();
  
      for (let i = 0; i < this.r; i++) {
        if (this.d[i][i] !== 1) {
          return false;
        }
      }
  
      return true;
    }
  
    getMatrix() {
      return this.d;
    }
  }


mat = new Matrix(4,4)
console.log(mat.init())
console.log(mat.initRandom())
console.log(mat.isSquared())
console.log(mat.isSymmetric())
console.log(mat.isIdentity())