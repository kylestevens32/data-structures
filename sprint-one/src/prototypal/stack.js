var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function() {
  if (Object.keys(this.storage).length > 0) {
    var popped = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return popped;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
