/**
 * 内部实现的堆（优先队列）类
 * 默认为小顶堆，通过传入比较函数可变为大顶堆
 */
class Heap {
    #data = [];       // 私有字段：存储堆数据
    #comparator;      // 私有字段：比较函数

    constructor(comparator = (a, b) => a - b) {
        this.#comparator = comparator;
    }

    // 公共只读属性：堆的大小
    get size() {
        return this.#data.length;
    }

    // 公共方法：查看堆顶元素
    peek() {
        return this.#data[0];
    }

    // 公共方法：插入元素
    push(val) {
        this.#data.push(val);
        this.#bubbleUp(this.#data.length - 1);
    }

    // 公共方法：弹出堆顶元素
    pop() {
        const top = this.#data[0];
        const last = this.#data.pop();
        if (this.#data.length > 0) {
            this.#data[0] = last;
            this.#sinkDown(0);
        }
        return top;
    }

    // 私有方法：上浮调整
    #bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.#comparator(this.#data[index], this.#data[parentIndex]) < 0) {
                [this.#data[index], this.#data[parentIndex]] = [this.#data[parentIndex], this.#data[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // 私有方法：下沉调整
    #sinkDown(index) {
        const n = this.#data.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let target = index;

            if (leftChild < n && this.#comparator(this.#data[leftChild], this.#data[target]) < 0) {
                target = leftChild;
            }
            if (rightChild < n && this.#comparator(this.#data[rightChild], this.#data[target]) < 0) {
                target = rightChild;
            }

            if (target !== index) {
                [this.#data[index], this.#data[target]] = [this.#data[target], this.#data[index]];
                index = target;
            } else {
                break;
            }
        }
    }
}

/**
 * MedianFinder 类：查找数据流的中位数
 */
class MedianFinder {
    // 公共类字段直接初始化
    // 大顶堆：保存较小的一半数据，堆顶是这部分的最大值
    #maxHeap = new Heap((a, b) => b - a);
    // 小顶堆：保存较大的一半数据，堆顶是这部分的最小值
    #minHeap = new Heap((a, b) => a - b);

    addNum(num) {
        // 1. 如果大顶堆为空，或者新数字小于等于大顶堆堆顶，加入大顶堆
        if (this.#maxHeap.size === 0 || num <= this.#maxHeap.peek()) {
            this.#maxHeap.push(num);
        } else {
            this.#minHeap.push(num);
        }

        // 2. 平衡两个堆的长度，确保大顶堆的长度最多比小顶堆多1，或者两者长度相等
        if (this.#maxHeap.size > this.#minHeap.size + 1) {
            this.#minHeap.push(this.#maxHeap.pop());
        } else if (this.#minHeap.size > this.#maxHeap.size) {
            this.#maxHeap.push(this.#minHeap.pop());
        }
    }

    findMedian() {
        // JS 中的除法会自动返回浮点数，无需像 Java 那样乘以 2.0
        if (this.#maxHeap.size === this.#minHeap.size) {
            return (this.#maxHeap.peek() + this.#minHeap.peek()) / 2;
        } else {
            // 因为我们在平衡时保证了大顶堆的长度 >= 小顶堆的长度
            // 所以奇数个元素时，中位数一定在大顶堆的堆顶
            return this.#maxHeap.peek();
        }
    }
}
