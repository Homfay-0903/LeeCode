/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const n1 = nums1.length, n2 = nums2.length

    if (!n1 || !n2 || !k) {
        return []
    }

    class MinHeap {
        constructor() {
            this.heap = []
        }

        _siftUp(idx) {
            const heap = this.heap

            while (idx > 0) {
                const parent = (idx - 1) >> 1

                if (heap[parent][0] <= heap[idx][0]) {
                    break
                }

                [heap[parent], heap[idx]] = [heap[idx], heap[parent]]

                idx = parent
            }
        }

        _siftDown(idx) {
            const heap = this.heap
            const n = heap.length

            while (true) {
                let left = idx * 2 + 1
                let right = idx * 2 + 2
                let smallest = idx

                if (left < n && heap[smallest][0] > heap[left][0]) {
                    smallest = left
                }
                if (right < n && heap[smallest][0] > heap[right][0]) {
                    smallest = right
                }

                if (smallest === idx) {
                    break
                }

                [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]

                idx = smallest
            }
        }

        push(node) {
            this.heap.push(node)
            this._siftUp(this.heap.length - 1)
        }

        pop() {
            if (!this.heap.length) {
                return null
            }

            const top = this.heap[0]
            const last = this.heap.pop()

            if (this.heap.length) {
                this.heap[0] = last
                this._siftDown(0)
            }

            return top
        }

        size() {
            return this.heap.length
        }

        peek() {
            return this.heap.length ? this.heap[0] : null
        }
    }

    const res = []
    const heap = new MinHeap()
    const limit = Math.min(n1, k)

    for (let i = 0; i < limit; i++) {
        heap.push([nums1[i] + nums2[0], i, 0])
    }

    while (k > 0 && heap.size()) {
        const [sum, i, j] = heap.pop()
        res.push([nums1[i], nums2[j]])

        if (j + 1 < n2) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1])
        }

        k--
    }

    return res
};