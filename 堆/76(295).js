// 改名：Heap → MyHeap，解决命名冲突问题
class MyHeap {
    constructor(compareFn) {
        this.heap = [];
        this.compare = compareFn;
    }

    push(val) {
        this.heap.push(val);
        this.#siftUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.#siftDown(0);
        }
        return top;
    }

    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    #siftUp(index) {
        while (index > 0) {
            const parent = (index - 1) >> 1;
            if (this.compare(this.heap[index], this.heap[parent]) >= 0) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    #siftDown(index) {
        const length = this.size();
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (left < length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// 主类不变，只修改堆的实例化
class MedianFinder {
    constructor() {
        // 这里也同步改成 MyHeap
        this.low = new MyHeap((a, b) => b - a); // 大顶堆
        this.high = new MyHeap((a, b) => a - b); // 小顶堆
    }

    addNum(num) {
        if (this.low.size() === 0 || num <= this.low.peek()) {
            this.low.push(num);
        } else {
            this.high.push(num);
        }

        if (this.low.size() > this.high.size() + 1) {
            this.high.push(this.low.pop());
        } else if (this.high.size() > this.low.size()) {
            this.low.push(this.high.pop());
        }
    }

    findMedian() {
        if (this.low.size() > this.high.size()) {
            return this.low.peek();
        }
        return (this.low.peek() + this.high.peek()) / 2;
    }
}