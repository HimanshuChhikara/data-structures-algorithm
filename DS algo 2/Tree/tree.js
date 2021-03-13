// function tree(){
// class Node{
//     constructor(data){
//         this.data = data;
//         this.right = null;
//         this.left = null;
//     }
// }

// class BinarySearch{
//     constructor(){
//         this.root = null;
//     }

//     Insert(data){
//         var newNode = new Node(data);
//         if(this.root === null){
//             this.root = newNode;
//         }
//         else{
//             this.insertNode(this.root,newNode);
//         }
//     }

//     InsertNode(Node,newNode){
//         if(newNode.data < Node.data){
//             if(Node.left === null){
//                 Node.left = newNode;
//             }
//             else{
//                 this.InsertNode(Node.left,newNode);
//             }
//         }
//         else{
//             if(Node.right===null){
//                 Node.right = newNode
//             }
//             else{
//                 this.InsertNode(Node.right,newNode)
//             }
//         }
//     }
// }
// }

// let t


class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
      this.count = 0;
    };
  };
  
  class BST {
    constructor() {
      this.root = null;
    }
    find(val) {
        if (!this.root) return undefined;
        let current = this.root,
            found = false;
      
        while (current && !found) {
          if (val < current.val) current = current.left;
          else if (val > current.val) current = current.right;
          else found = true;
        };
      
        if (!found) return 'Nothing Found!';
        return current;
      };
      
    create(val) {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
  
      const addSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (val === current.val) {
          current.count++;
          return this;
        };
        if (val < current.val) addSide('left');
        else addSide('right');
      };
    };
  };
  
  let tree = new BST();
  tree.create(10);
  tree.create(4);
  tree.create(4);
  tree.create(12);
  tree.create(2);
  tree.find(2);
  console.log(tree);