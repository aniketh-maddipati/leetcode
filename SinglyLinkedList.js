class Node {
    constructor(data, next=null){
      this.data =  data,
      this.next = next
    }
  }
  
  class LinkedList{
    constructor(){
      this.head= null;
      this.size = 0;
    }
  }
  
  
  LinkedList.prototype.insertAtEnd = function(data) {
  
    let newNode = new Node(data);
  
    if(!this.head){
      this.head = newNode;
      return this.head;
  }
  let tail = this.head;
  while(tail.next !== null){
       tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
  
  }
  
  
  
  LinkedList.prototype.insertAtBeginning = function(data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node(data);
  // The pointer next is assigned head pointer so that both pointers now point at the same node.
      newNode.next = this.head;
  
  // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
      
  this.head = newNode;
  return this.head;
  }
  
  
  
  LinkedList.prototype.getAt = function(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
  }
  
  return null;
  }
  
  LinkedList.prototype.insertAt = function(data, index) {
    let newNode = new Node(data);
  
    if(!this.head){
      this.head = newNode;
      return;
    }
  
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
  
    const previous = this.getAt(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
  
    return this.head;
  
  }
  
  LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
      return;
    }
  
    this.head = this.head.next;
    return this.head;
  }
  
  LinkedList.prototype.deleteLastNode = function(){
  
    if(!this.head){
      return;
    }
  
    if(!this.head.next){
      this.head = null;
      return;
    }
  
    let previousNode = this.head;
    let tail = this.head.next;
  
    while(tail.next !== null){
      previousNode = tail;
      tail = tail.next;
  }
  previousNode.next = null;
  return this.head;
  }
  
  
  LinkedList.prototype.deleteAt = function(index){
    if(!this.head){
      this.head = new Node(data);
    }
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
  
  
    const previous = this.getAt(index-1);
  
    if(!previous || !previous.next) {
      return;
    }
  
    previous.next = previous.next.next;
    return this.head;
  }
  
  
  LinkedList.prototype.deleteList = function(){
    this.head = null;
  }
  
  
  let list = new LinkedList();
  
  console.log(list);
  console.log(list.insertAtEnd(3));
  console.log(list.insertAtEnd(true));
  console.log(list.insertAtEnd([1, 2, 3]));
  
  console.log(list.insertAtBeginning("HELLO"));
  console.log(list.insertAt(8,1));
  console.log(list.getAt(2));
  
  
  console.log(list.deleteFirstNode());
  console.log(list.deleteLastNode());
  console.log(list.deleteAt(1));
  console.log(list.deleteList());