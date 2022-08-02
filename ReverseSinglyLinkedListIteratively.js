/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    console.log(head);
    let prevNode = null;
    let currNode = head;
    let nextNode = null;
    
    if (head === null){
        return head;
    }
    
    while(currNode){
        nextNode = currNode.next;
        currNode.next = prevNode
        // currNode = null <- 1,next 
        prevNode = currNode;
        // {1,next}
        currNode = nextNode
        // {2,next}
        nextNode= null;     
    };
    
    head = prevNode;
    return head;
    
};


console.log(reverseList([1,2,3,4,5]));
console.log(reverseList([]));
console.log(reverseList(null));