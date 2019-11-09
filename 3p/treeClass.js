class Node{
    constructor(data){
            this.data = data
            this.left = null
            this.right = null
    }
}

class Tree{
    constructor(root){
        this.root = root
    }

    insert(nodo){
        if(this.root = null){
            this.root = nodo;
            console.log("Se ha creado un Arbol")
            return;
        
        }else{
            if(nodo.left != null){
                nodo.left = nodo
            }else{
                if(nodo.right != null){
                    nodo.right = nodo
                }
            }
        }
    }
}