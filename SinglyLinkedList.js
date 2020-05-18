class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


//   var first = new Node("Hi");
// first.next=new Node("How");
// first.next.next=new Node("are");
// first.next.next.next=new Node("you");  
class SinglyLinkedList{

  constructor(){
    this.head=null;
    this.length=0;

  }

  push(val){
    var newNode = new Node(val);
    var current;
    if(!this.head){
      this.head= newNode;
   
      
    }else{
    current=this.head;
    while(current.next){
      current= current.next
    }
    current.next = newNode;
    }
    this.length++;
    return this;
  }


insertFirst(val){
  var newNode = new Node(val);
  if(!this.head) {
    this.head = newNode;
    this.length++;
  }else {
   var tempHead = this.head;
   this.head=newNode;

  this.head.next=tempHead;
   //this.head = newNode
   this.length++

  }
 return this
}

removeFirst(){
  if(!this.head) return null

  var data = this.head;
  this.head=data.next;
  this.length--;
  return data;
}


  pop(){
   
    if(!this.head) return undefined;
      var current=this.head;
     var newTail = current.next;
    while(current.next){
      console.log(current.val);
      newTail = current;
      current = current.next;
    }
     console.log(current);
    console.log(newTail);
    if(newTail){
      newTail.next = null;
    }else{
      newTail= null;
      this.head=null;
    }
   
   this.length--
//    if(this.length === 0){
//      this.head = null
//      this.length=0;
//    }

  }


  insertAt(val,index){
   var newNode= new Node(val);
   var current=this.head;
    var tempIndex=0;
   if(!this.head){
     this.head=newNode;
     this.length++;
   }else{
  
       while(tempIndex<index-1){
     console.log(tempIndex);
     current =current.next;
tempIndex++;
   }
   var tempTail = current.next;
   //current.next =newNode;
   current.next = newNode;
   current.next.next= tempTail;
//    this.head.next = newNode;
//    this.head.next= tempTail;
   //newNode.next = tempTail;
   this.length++;
   }
 
   return this;  
  }

  removeAt(index){
    if(!this.head) return null
    var current = this.head;
    var tempIndex =0
    while(tempIndex<index-1){
      current=current.next;
    }
    var tempTail= current.next;
    current.next = tempTail.next;
    this.length--;
    return tempTail;
  }

  traverse(){
    var current=this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }

  clear(){
    this.head=null;
    this.length=0
  }

}

var list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.insertFirst(6);
list.insertAtt(7,1);
