const LinkedList = require("./linked-list");

class Stack {
  constructor() {
    this.queue = new LinkedList();
  }

  push(data) {
    this.queue.add(data, 0);
  }

  pop() {
    this.queue.remove(0);
  }

  print() {
    this.queue.print();
  }
}

const q = new Stack();

q.push(1);
q.push(2);
q.push(3);
q.pop();
q.pop();
q.print();
