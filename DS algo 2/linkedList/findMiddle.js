function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

var middleNode = function(head){
    let slow = head;
    let fast = head;

    while(fast!=null){
        fast = fast.next;

        if(fast == null) break
        else fast = fast.next;

        slow = slow.next;
    }
    return slow
}