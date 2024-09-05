class Stack {
    constructor() {
        this.items = [];
    }
  
    push(element) {
        this.items.push(element);
    }
  
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }
  
    peek() {
        return this.items[this.items.length - 1];
    }
  
    isEmpty() {
        return this.items.length === 0;
    }
  
    size() {
        return this.items.length;
    }
  
    clear() {
        this.items = [];
    }
  
    print() {
        console.log(this.items.toString());
    }
}
  
class Queue {
    constructor() {
        this.items = [];
    }
  
    enqueue(element) {
        this.items.push(element);
    }
  
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
  
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }
  
    isEmpty() {
        return this.items.length === 0;
    }
  
    size() {
        return this.items.length;
    }
  
    clear() {
        this.items = [];
    }
  
    print() {
        console.log(this.items.toString());
    }
}
  

function reverseString(str) {
    const stack = new Stack();
    
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedStr = '';
    
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}
  
  // 테스트
  const str = "Hello, World!";
  console.log("Original string:", str);
  console.log("Reversed string:", reverseString(str));