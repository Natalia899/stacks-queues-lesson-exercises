/* Write your class below */
// const Stack = require('./Stack')
// class MinStack {
//     constructor() {
//         this.stack = []
//         this.length = 0
//         this.minNum = new Stack()
//     }
//     print() {
//         console.log(this.stack)
//     }
//     push(num) {
//         if (this.isEmpty()) {
//             this.minNum.push(num)
//         } else {
//             if (this.minNum.peek() > num) {
//                 this.minNum.push(num)
//             }
//         }
//          this.stack[this.length] = num
//         this.length++
//     }
//     peek() {
//         return this.isEmpty() ? null : this.stack[this.length - 1]
//     }
//     pop() {
//         if (this.isEmpty()) {
          
//             return null
//         } else if (this.stack[this.length - 1] === this.minNum.peek()) {
           
//          this.minNum.pop()
//             this.length--
//             delete this.stack[this.length-1]
//         } else {
          
//             this.length--
//             delete this.stack[this.length-1]
//         }
//     }
//     isEmpty() {
      
//         return this.length === 0 ? true : false
//     }
//     getMin() {
//       return  this.minNum.isEmpty() ? null : this.minNum.peek()
//     }
// }
//solution
const Stack = require('./Stack')
class MinStack extends Stack {
  constructor() {
    super()
    this.min = new Stack()
  }
  push(x) {
    if (this.isEmpty()) {
      this.min.push(x)
    } else if (x < this.min.peek()) {
      this.min.push(x)
    }
    super.push(x)
  }
  pop() {
    if (this.isEmpty()) {
      return null
    } else if (this.peek() === this.min.peek()) {
      this.min.pop()
    }
    return super.pop()
  }
  getMin() {
    return this.min.peek()
  }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19

/* Do not remove the exports below */
module.exports = MinStack