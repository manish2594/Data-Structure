class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  getAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    //            var currentNode = this.head;
    //            var count = 0;

    //            while(index != count){
    //                currentNode = currentNode.next;
    //                count++;
    //            }
    //            return currentNode;

    var currentNode;
    var count;

    if (index <= this.length / 2) {
      currentNode = this.head;
      count = 0;
      while (index != count) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      currentNode = this.tail;
      count = this.length - 1;
      while (index != count) {
        currentNode = currentNode.next;
        count--;
      }
    }
    return currentNode;
  }

  insertAtIndex(index, val) {
    if (index < 0 || index >= this.length) return false;
    var newNode = new Node(val);
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      return !!this.unshift(val);
    } else if (index == this.length) {
      return !!this.push(val);
    } else {
      var beforeNode = this.getAtIndex(index - 1);
      var afterNode = beforeNode.next;
      newNode.next = afterNode;
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
    }
  }

  replaceAt(index, val) {
    var foundNode = this.getAtIndex(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    var newNode = new Node(val);
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      return this.shift();
    } else if (index == this.length - 1) {
      return this.pop();
    } else {
      var beforeNode = this.getAtIndex(index - 1);
      var currentNode = beforeNode.next;
      var afterNode = currentNode.next;
      beforeNode.next = currentNode.next;
      afterNode.prev = beforeNode;
      currentNode.next = null;
      currentNode.prev = null;
      this.length--;
      return currentNode;
    }
  }

  traverse() {
    var currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  reverse() {
    var currentNode = this.tail;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.prev;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
