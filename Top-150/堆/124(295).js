class MyHeap {
    constructor(compareFn) {
        this.heap = []
        this.compareFn = compareFn
    }

    #siftUp(idx) {
        const heap = this.heap

        while (idx) {
            const parent = (idx - 1) >> 1

            if (this.compareFn(heap[parent], heap[idx]) < 0) {
                break
            }

            [heap[idx], heap[parent]] = [heap[parent], heap[idx]]

            idx = parent
        }
    }

    #siftDown(idx) {
        const heap = this.heap
        const n = heap.length

        while (true) {
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            let extreme = idx

            if (left < n && this.compareFn(heap[left], heap[extreme]) < 0) {
                extreme = left
            }
            if (right < n && this.compareFn(heap[right], heap[extreme]) < 0) {
                extreme = right
            }

            if (extreme === idx) {
                break
            }

            [heap[idx], heap[extreme]] = [heap[extreme], heap[idx]]

            idx = extreme
        }
    }

    push(val) {
        this.heap.push(val)
        this.#siftUp(this.heap.length - 1)
    }

    pop() {
        if (!this.heap.length) {
            return null
        }

        const top = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length) {
            this.heap[0] = last
            this.#siftDown(0)
        }

        return top
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0] ?? null
    }
}

class MedianFinder {
    constructor() {
        this.low = new MyHeap((a, b) => b - a)
        this.high = new MyHeap((a, b) => a - b)
    }

    addNum(num) {
        if (!this.low.size() || num <= this.low.peek()) {
            this.low.push(num)
        } else {
            this.high.push(num)
        }

        if (this.low.size() > this.high.size() + 1) {
            this.high.push(this.low.pop())
        } else if (this.high.size() > this.low.size()) {
            this.low.push(this.high.pop())
        }
    }

    findMedian() {
        if (this.low.size() > this.high.size()) {
            return this.low.peek()
        } else {
            return (this.low.peek() + this.high.peek()) / 2
        }
    }
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */