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

insert(nodo){

        //crear un nuevo nodo
        let nodoNuevo = nodo

        if(!this.root){
            this.root = nodoNuevo
        }

        //funcion para confirmar donde se va a insertar.
        const search = node => {
            
            //si el valor es menor ir a la izquierda
            if(nodoNuevo.data < node.data){
            
                //si no tiene hijo izquierdo insertar
                if(!node.left){
                    node.left = nodoNuevo
                //si tiene buscar en su hijo izquierdo
                } else {
                    search(node.left)
                }

            }

            //si el valor es mayor ir a la derecha
            if(nodoNuevo.data > node.data){
                
            //si no tiene hijo derecho insertar
                if(!node.right){
                    node.right = nodoNuevo
                } else {
            //si tiene buscar en su hijo derecho
                    search(node.right)
                }
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
             } else if (key < node.data && node.left) {
          return this.remove(n, node.left);
                    } else if (key > node.data && node.right) {
                         return this.remove(n, node.right);
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