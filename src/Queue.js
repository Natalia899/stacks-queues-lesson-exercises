/* Write your class below */

class Queue {
    constructor(){
        this.queue = []
        this.length = 0
    }
    print(){
        console.log(this.queue)
    }

    enqueue(x){
       //Adds an item to the queue
       this.queue.unshift(x)
       this.length++   
    }
    peek(){
      //  Returns the front item in the queue 
     return this.isEmpty() ? null : this.queue[this.length-1]
    }
   
    dequeue(){
      //  Returns the front item in the queue and removes it
      this.length--
      return this.queue.splice(0, 1)
    }

    isEmpty() {
      //  Returns true if the queue is empty, false otherwise
      return this.length === 0 ? true : false
    }
}


//You can paste the test code from the lesson below to test your solution

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Queue