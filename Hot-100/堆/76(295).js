// 改名：Heap → MyHeap，解决命名冲突问题
class MyHeap {
    constructor(compareFn) {
        this.heap = []
        this.compareFn = compareFn
    }

    #siftUp(index) {
        while (index > 0) {
            const parentIdx = (index - 1) >> 1
            if (this.compareFn(this.heap[index], this.heap[parentIdx]) >= 0) {
                break
            }
            [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]]
            index = parentIdx
        }
    }

    #siftDown(index) {
        const n = this.size()
        while (true) {
            const left = index * 2 + 1
            const right = index * 2 + 2
            let smallest = index

            if (left < n && this.compareFn(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left
            }
            if (right < n && this.compareFn(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right
            }

            if (smallest === index) {
                break
            }
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest
        }
    }

    push(val) {
        this.heap.push(val)
        this.#siftUp(this.heap.length - 1)
    }

    pop() {
        if (this.size() === 0) {
            return null
        }
        const top = this.heap[0]
        const last = this.heap.pop()

        if (this.size() > 0) {
            this.heap[0] = last
            this.#siftDown(0)
        }

        return top
    }

    peek() {
        return this.heap[0] ?? null
    }

    size() {
        return this.heap.length
    }
}

// 主类不变，只修改堆的实例化
class MedianFinder {
    constructor() {
        this.small = new MyHeap((a, b) => b - a)
        this.big = new MyHeap((a, b) => a - b)
    }

    addNum(num) {
        if (this.small.size() === 0 || num <= this.small.peek()) {
            this.small.push(num)
        } else {
            this.big.push(num)
        }

        if (this.big.size() > this.small.size()) {
            this.small.push(this.big.pop())
        } else if (this.small.size() >= this.big.size() + 2) {
            this.big.push(this.small.pop())
        }
    }

    findMedian() {
        if (this.small.size() > this.big.size()) {
            return this.small.peek()
        } else {
            return (this.small.peek() + this.big.peek()) / 2
        }
    }
}