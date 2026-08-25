class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cacheMap = new Map()
    }

    get(key) {
        if (this.cacheMap.has(key)) {
            const cacheVal = this.cacheMap.get(key)
            this.cacheMap.delete(key)
            this.cacheMap.set(key, cacheVal)
            return cacheVal
        } else {
            return -1
        }
    }

    put(key, value) {
        if (this.cacheMap.has(key)) {
            this.cacheMap.delete(key)
        } else {
            if (this.cacheMap.size >= this.capacity) {
                const oldestKey = this.cacheMap.keys().next().value
                this.cacheMap.delete(oldestKey)
            }
        }

        this.cacheMap.set(key, value)
    }
}