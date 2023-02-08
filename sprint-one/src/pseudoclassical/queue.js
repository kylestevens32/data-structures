var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function(value) {
  if (Object.keys(this.storage).length > 0) {
    var nextUp = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return nextUp;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var newQueue = new Queue();

