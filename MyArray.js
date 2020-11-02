class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
     get(index){
         return this.data[index]
     }

     push(item){
         this.data[this.length] = item;
         this.length++ ;
         return this.length;

     }
     printArray(){
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null){
            array.push(currentNode);
        
        }
     }
}

const newArray = new MyArray();
// newArray.push('hii');
newArray.push('himanshu');
newArray.push('Chhikara')
newArray.printArray();

console.log(newArray.get(0));
