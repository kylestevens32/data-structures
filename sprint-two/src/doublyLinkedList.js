class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  addToTail (input) {
    // IOCE same as in singly
    // make a new node with the input
    var newNode = new DoubleLinkNode(input);
    // if tail isn't null, point it to the new node
    if (this.tail !== null) {
      this.tail.next = newNode;
      // also set the prev of newnode to the old tail
      newNode.prev = this.tail;
    } else { // if tail is null, head will always also be null
      this.head = newNode;
    }
    // set the tail equal to newNode, do this last
    this.tail = newNode;
  }

  addToHead (input) {
    // make a new node with input
    var newNode = new DoubleLinkNode(input);
    // if head isn't null,
    if (this.head !== null) {
      // point head previous to new node
      this.head.prev = newNode;
      // point new node next to head
      newNode.next = this.head;
    } else {
      // point tail to new node
      this.tail = newNode;
    }
    // point head to new node
    this.head = newNode;
  }

  removeTail () {
    // store the old tail value
    var oldTailValue = this.tail.value;
    // if tail previous is not null
    if (this.tail.prev !== null) {
      //  set tail to tail previous
      this.tail = this.tail.prev;
      // set the new tail next to null
      this.tail.next = null;
    } else {
    //  set tail to null
    //  set head to null
      this.tail = null;
      this.head = null;
    }
    // return value
    return oldTailValue;
  }

  removeHead () {
    // we'll figure out empty list remove rules later
    // store the head (that sounds kinda dirty)
    var oldHeadValue = this.head.value;
    // if head has a next
    if (this.head.next !== null) {
      // set head next to be the new head
      this.head = this.head.next;
      // set the new heads prev to be null
      this.head.prev = null;
    } else { // if head has no next
      // set head to be null
      this.head = null;
      // set tail to be null
      this.tail = null;
    }
    // return the oldhead
    return oldHeadValue;
  }

  contains (input) {
    // create a variable named current and set it equal to head
    var current = this.head;
    // while the current value isn't input
    while (current.value !== input) {
      // if current next is null
      if (current.next === null) {
        // return false
        return false;
      }
      // set current equal to current next
      current = current.next;
    }
    // return true
    return true;
  }


}

class DoubleLinkNode {
  constructor (input) {
    this.value = input;
    this.prev = null;
    this.next = null;
  }
}

