var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size,
    storage: {}
  };

  return someInstance;
};

var stackMethods = {};


stackMethods.push = function(value) {
  //debugger;
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



