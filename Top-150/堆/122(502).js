/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    const n = profits.length
    const projects = []

    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]])
    }

    projects.sort((a, b) => a[0] - b[0])

    class MaxHeap {
        constructor() {
            this.heap = []
        }

        push(val) {
            this.heap.push(val)
            this._siftUp(this.heap.length - 1)
        }

        pop() {
            if (this.heap.length === 0) {
                return null
            }

            const top = this.heap[0]
            const last = this.heap.pop()

            if (this.heap.length > 0) {
                this.heap[0] = last
                this._siftDown(0)
            }

            return top
        }

        peek() {
            return this.heap.length > 0 ? this.heap[0] : null
        }

        size() {
            return this.heap.length
        }

        _siftUp(idx) {
            while (idx > 0) {
                const parent = (idx - 1) >> 1

                if (this.heap[parent] >= this.heap[idx]) {
                    break
                } else {
                    [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
                    idx = parent
                }
            }
        }

        _siftDown(idx) {
            const n = this.heap.length

            while (true) {
                let left = idx * 2 + 1
                let right = idx * 2 + 2
                let largest = idx

                if (left < n && this.heap[left] > this.heap[largest]) {
                    largest = left
                }
                if (right < n && this.heap[right] > this.heap[largest]) {
                    largest = right
                }

                if (largest === idx) {
                    break
                }

                [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]]

                idx = largest
            }
        }
    }

    const maxHeap = new MaxHeap()

    let flag = 0
    let remaining = k

    while (remaining > 0) {
        while (flag < n && projects[flag][0] <= w) {
            maxHeap.push(projects[flag][1])
            flag++
        }

        if (!maxHeap.size()) {
            break
        }

        w += maxHeap.pop()
        remaining--
    }

    return w
};