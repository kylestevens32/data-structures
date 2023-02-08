class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (Object.keys(this.storage).length > 0) {
      var frontOfLine = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return frontOfLine;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
