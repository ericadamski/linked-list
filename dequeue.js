const LinkedList = require("./linked-list");

class Dequeue {
  constructor() {
    this.queue = new LinkedList();
  }

  pushBack(data) {
    this.queue.add(data, 0);
  }

  pushFront(data) {
    this.queue.add(data);
  }

  popFront() {
    this.queue.remove(this.queue.size() - 1);
  }

  popBack() {
    this.queue.remove(0);
  }

  print() {
    this.queue.print();
  }
}

const q = new Dequeue();

q.pushFront(1);
q.pushFront(2);
q.pushBack(4);
q.pushBack(5);
q.popFront();
q.popBack();
q.print();
