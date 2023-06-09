var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  $.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //i: a value to be added in as a child (the child is also a tree)
  //o: nothin', but side effect of the tree getting a new child with that value
  //c: time complexity?
  //e: nothing comes to mind.

  // push a tree made from value into this tree's children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //i: a target value
  //o: bool of if this node's value is target, or if any of it's children or their children and so on contain the value
  //c: man this really seems like it's gonna have a gross time complexity
  //e: maybe if some awful person made a child node also a parent of its own parent, dear god let that not happen.

  // if this tree's value is target
  if (this.value === target) {
    // return true
    return true;
  }

  // for this tree's children
  for (let childIndex in this.children) {
    // if the child contains target
    if (this.children[childIndex].contains(target)) {
      // return true
      return true;
    }
  }

  // return false
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1), you're just pushing to an array, we know where the end of an array is and can do it in constant
contains: O(n) because its not sorted so we have to check every child
 */