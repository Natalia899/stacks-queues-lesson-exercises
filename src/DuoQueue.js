/* Write your class below */
const Queue = require('./Queue')
class DuoQueue extends Queue {
    constructor() {
        super()
        this.q1 = new Queue()
        this.q2 = new Queue()
    }
    enqueue(person, qNum) {
        // method that adds the person to the qNumth queue
        if(qNum === 1 ){
            this.q1.queue.push(person)
        } else { this.q2.queue.push(person)}
    }
    dequeue(qNum) {
        // method that dequeues from the qNumth queue
        if (qNum===1){
            this.q1.queue.splice(0,1)
        } else (this.q2.queue.splice(0, 1))
    }
    getLongestQueue() {
        // method that returns the longest queue
        if (this.q1.queue.length>this.q2.queue.length) { return this.q1.queue} else {
            return this.q2
        }
    }
    getShortestQueue() {
        //  method that returns the shortest queue
        if (this.q1.queue.length<this.q2.queue.length) { return this.q1.queue} else {
            return this.q2.queue
        }
    }
    balanceQueues() {
        // console.log(this.getLongestQueue())
        //  console.log(this.getShortestQueue())

        // //  method that moves people from the longest queues to the shortest ones
        // // This movement should happen until the difference between the longest and shortest queue is 1 or less
        // while (this.q1.queue.length-this.q2.queue.length <= 1 || this.q2.queue.length-this.q1.queue.length <= 1 ) {
        //   let moveOne =  this.getLongestQueue()
        //   moveOne.splice(this.getLongestQueue().length-1, 1)
        //     this.getShortestQueue().push(moveOne)
     
        // }

        let longestQueue = this.getLongestQueue()
        let shortestQueue = this.getShortestQueue()
        while ((longestQueue.length - shortestQueue.length) > 1) {
            shortestQueue.enqueue(longestQueue.peek())
            longestQueue.dequeue()
        }

    }

}
let dq = new DuoQueue()
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = DuoQueue