const LinkedList = require("./linked-list");

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  push(data) {
    this.queue.add(data, 0);
  }

  pop() {
    this.queue.remove(this.queue.size() - 1);
  }

  print() {
    this.queue.print();
  }
}

const q = new Queue();

q.push(1);
q.push(2);
q.pop();
q.push(3);
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.pop();
q.print();

// 3->[]->2 | 🐮-(next pls)
