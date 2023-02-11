var BinarySearchTree = function(value) {
  this.left;
  this.right;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(newBranch) {
  // I: a branch value
  // O: adding the branch
  // C: nothing
  // E: same value - test?

  // if new branch is more than this value
  if (newBranch > this.value) {
    // if theres a right
    if (this.right) {
      // call insert on this right with new branch as argument
      this.right.insert(newBranch);
    } else {
      // set right to new tree with value
      this.right = new BinarySearchTree(newBranch);
    }
  } else {
    // if theres a left
    if (this.left) {
      // call insert on this left with new branch as argument
      this.left.insert(newBranch);
    } else {
      // set left to new tree passing in value
      this.left = new BinarySearchTree(newBranch);
    }
  }

};

BinarySearchTree.prototype.contains = function(branch) {
  // I: value to check for
  // O: boolean of if it was found
  // C: none
  // E: multiple of same value?

  // if branch is equal to this value
  if (branch === this.value) {
  // return true
    return true;
  }

  // if branch is more than this value
  if (branch > this.value) {
    // if this right doesnt exist return undefined
    if (this.right === undefined) {
      return false;
    }
    // go into the right branch recursively
    return this.right.contains(branch);
  } else { // this should be hit only if branch < this value
    // if this left doesnt exist return undefined
    if (this.left === undefined) {
      return false;
    }
    // go into the left branch recursively
    return this.left.contains(branch);
  }

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // call callback on this value
  callback(this.value);
  // if theres a left
  if (this.left) {
  //  call depthFirstLog on left
    this.left.depthFirstLog(callback);
  }
  // if theres a right
  if (this.right) {
  //  call depthFirstLog on right
    this.right.depthFirstLog(callback);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
insert and contains:
  Linear at worst, logarhythmic at best (tree evening function would help with that)
depthFirstLog:
  Linear
 */
