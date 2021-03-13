class  newNode 
{
    constructor(value){
    this.value = value,
    this.next = null
    }
};
class LinkedList{
    constructor(value){

        this.head ={ 
        value : value,
        next : null
    }
    this.tail = this.head
    this.length = 1;
    }
    append(value){
       const node = new newNode(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array =[];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    insert(index,value){
        if(index => this.length){

            return this.append();
        }
        const newnode = {
            value : value,
            next : null
        }

        const Leader = this.traverseToIndex(index-1)
        const holdeingpointer = Leader.next;
        Leader.next = newnode;
        newnode.next = holdeingpointer;
        this.length ++;
        this.printList();
    }

        traverseToIndex(index) {
            let counter = 0;
            let currentNode = this.head;
            while(counter !== index){
                currentNode = currentNode.next
                counter ++;
            }

        }
    }


let linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(11);
linkedList.append(122);
linkedList.append(1212)
linkedList.insert(200,99);
linkedList.printList()

// console.log(linkedList);