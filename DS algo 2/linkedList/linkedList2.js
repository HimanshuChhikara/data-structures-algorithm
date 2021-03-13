class newNode {
    constructor(){
    this.value : value,
    this.next  null
    }
};
class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next : null
        },
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const 
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
         const newNode = {
             value : value,
             next : null,
         };
         newNode.next = this.head;
         this.head = newNode;
         this.length++;

         return this

    }
}

let res = new LinkedList(10);
// LinkedList.append(12)
res.append(13);
res.append(134)
res.prepend(10)
res.prepend(97)
console.log(res);

