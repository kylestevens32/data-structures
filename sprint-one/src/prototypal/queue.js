var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.storage = {};

  return newQueue;
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


