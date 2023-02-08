var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function() {
  if (Object.keys(this.storage).length > 0) {
    var topOfStack = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return topOfStack;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


var newStack = new Stack();