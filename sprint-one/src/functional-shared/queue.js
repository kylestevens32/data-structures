var Queue = function() {
  var someInstance = {
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size,
    storage: {},
    front: 0,
    back: 0
  };

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if (Object.keys(this.storage).length > 0) {
    var nextInLine = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return nextInLine;
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

