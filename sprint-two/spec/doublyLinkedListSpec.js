describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList;
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added to the tail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added to the head', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added to either head or tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed from either head or tail', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(5)).to.equal(false);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should set head to null when removeTail is called on a one node list', function () {
    doublyLinkedList.addToTail(1);
    expect(doublyLinkedList.head.value).to.equal(1);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head).to.be.null;
  });

  it('should set tail to null when removeHead is called on a one node list', function () {
    doublyLinkedList.addToTail(1);
    expect(doublyLinkedList.tail.value).to.equal(1);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.tail).to.be.null;
  });

});