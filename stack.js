/* 
   DATA STRUCRUTES AND ALGORITHMS - STACK
   DATE: 2022/12/13 
*/

class Stack {
    constructor() // Initialization
    {
        this.items = [];
        this.count = 0;
    }

    push(element) // Add element to top of stack
    {
        this.items[this.count] = element;
        this.count +=1;
        return this.count - 1;
    }
    
    pop() // Remove element from top of stack
    {
        if(this.items == 0) {return undefined;}
        let deleteItem = this.items[this.count-1];
        this.count -= 1;
        return deleteItem;
    }
    
    peek() // Check top element in stack
    {
        return this.items[this.count-1];
    }
    
    isEmpty() // Check if stack is empty 
    {
        return this.count == 0; // will return true
    }
    
    size() // Check size
    {
        return this.count;
    }
    
    print() // Print elements in stack
    {
        let str = '';
        for(let i=0; i<this.count; i++)
        {
            str += this.items[i] +' ';
        }
        return '['+ str +']';
    }
    
    clear() // Empty the stack
    {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();

// OUTPUT

console.log(`${stack.push(10)} aded to top of stack`);
console.log(`${stack.push(20)} added to top of stack`);
console.log(`${stack.push(30)} added to top of stack`);

console.log(`${stack.pop()} removed from stack`);


console.log(`${stack.peek()} is top element in my stack`);

console.log(`Is empty? ${stack.isEmpty()}`);

console.log(`I have ${stack.size()} elements in my stack`); 

console.log(`${stack.print()} is a print of my stack`);

stack.clear();

console.log(`${stack.print()} is a print of my stack after clearing`);
