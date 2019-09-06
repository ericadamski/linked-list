class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data, before = null) {
    if (!this.head) {
      this.head = new Node(data);

      return;
    }

    let previousNode = null;
    let currentNode = this.head;
    let index = before;

    while (currentNode !== null) {
      if (before !== null && index-- === 0) {
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // [4]->[3]->
    //         [5]->[2]->[1]->null
    if (!previousNode) {
      /**
       * I want to be the head
       */
      this.head = new Node(data, this.head);
    } else {
      previousNode.next = new Node(data, currentNode);
    }
  }

  remove(index) {
    if (this.head === null) {
      /**
       * the list is empty
       */
      return;
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (index-- <= 0) {
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!previousNode) {
      /**
       * I want to remove the head
       */
      this.head = currentNode.next;
    } else {
      previousNode.next = currentNode.next;
    }
  }

  get(index) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (index-- <= 0) {
        break;
      }

      currentNode = currentNode.next;
    }

    return currentNode && currentNode.data;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  print() {
    let currentNode = this.head;

    while (currentNode !== null) {
      process.stdout.write(`[${currentNode.data}]->`);

      currentNode = currentNode.next;
    }
    process.stdout.write(`null \n`);
  }
}

// const ll = new LinkedList();

// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5, 2);
// // [4]->[3]->[5]->null                   ☠️[2]->[1]->null
// ll.add(6, 0);
// ll.add(7, 1);
// ll.add(8, 20);

// ll.remove(3);
// ll.print();
// ll.remove(0);
// ll.print();
// ll.remove(ll.size() - 1);

// console.log(ll.get(0));

// ll.print();

module.exports = LinkedList;
