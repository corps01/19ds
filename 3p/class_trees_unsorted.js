class Node{
    constructor(data){
            this.data = data
            this.left = null
            this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    } 

    insert(newnode){

        //crear un nuevo nodo
        let nodoNuevo = newnode;

        //si no existe raiz que este nodo sea la raiz
        if(!this.root){
            this.root = nodoNuevo
            return console.log("Se ha insertado la raiz");
        }

        //funcion para confirmar donde se va a insertar.        
        const search = node => {
            //si el nodo izquierdo no esta ocupado insetar ahi
            if(!node.left){
                node.left = nodoNuevo;
            //si el nodo derecho no esta ocupado insertar ahi
            }else if(!node.right){
                node.right = nodoNuevo;
                }
            
            //si los dos estan ocupados entrar a las siguientes condiciones
            else if (node.right && !node.left.right) {
            search(node.left);
                } else if (node.left && !node.right.left) {
                search(node.right);
                    } else if (node.right && !node.right.right) {
                    search(node.right);
                        } else {
                                search(node.left);
                            }

        }

        search(this.root)
    }


    preorder() {
        let result = []
    
        const preordersearch = node => {
          // capturar valor del nodo raiz
          result.push(node.data)
          // si existe un hijo izquierdo, bucar hacia la izquierda otra vez
          if (node.left) preordersearch(node.left)      
          // si existe un hijo derecho, bucar hacia la derecha otra vez
          if (node.right) preordersearch(node.right)
        }
    
        preordersearch(this.root)
    
        return result;    
      }

    bft(){
        let queue = [];
        let print = [];
        
        queue.push(this.root)

        while(queue.length){
            //insertar a la pila de salida el primer valor de la cola
            let nodo_aqui = queue.shift()
            
            print.push(nodo_aqui.data)

            if(nodo_aqui.left){
                queue.push(nodo_aqui.left)
            }

            if(nodo_aqui.right){
                queue.push(nodo_aqui.right)
            }
            
        }
    
        return print;

    }

    remove(key, node = this.root) {
        if (node == null) {
          return null;
        }
        if (node.left.data === key) {
          node.left = null;
          return node;
        } else if (node.right.data === key) {
          node.right = null;
          return node;
            } else if (node.right && !node.left.right) {
            return this.remove(key, node.left);
                } else if (node.left && !node.right.left) {
                return this.remove(key, node.right);
                    } else if (node.right && !node.right.right) {
                    return this.remove(key, node.right);
                        } else {
                        return this.remove(key, node.left);
                                }
      }
      
}



//creacion arbol

let tree1 = new Tree()

//creacion e insercion de nodos
let root = new Node(1)
tree1.insert(root)
let n2 = new Node(2)
tree1.insert(n2)
let n3 = new Node(3)
tree1.insert(n3)
let n4 = new Node(4)
tree1.insert(n4)
let n5 = new Node(5)
tree1.insert(n5)
let n6 = new Node(6)
tree1.insert(n6)
let n7 = new Node(7)
tree1.insert(n7)




//recorridobft
console.log(tree1.bft());

//recorrido
console.log(tree1.preorder());