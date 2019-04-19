// Stack implementation

class Stack {

  constructor(items) {
    this.count = 0;
    this.storage = {};
    if (Array.isArray(items)) {
      items.forEach(item => {
        this.push(item);
      });
    }
  }

  push(item) {
    this.storage[this.count] = item;
    this.count++;
    return item;
  }

  pop() {

    if (this.empty()) {
      throw new Error('Stack is Empty');
    }

    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  peek() {
    if (this.empty()) {
      throw new Error('Stack is Empty');
    }
    return this.storage[this.count - 1];
  }

  size() {
    return this.count;
  }

  empty() {
    return this.count === 0;
  }

  removeAll(){
    this.count = 0;
    this.storage = {};
  }

  clone() {
    return new Stack(Object.values(this.storage));
  }

}
