class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cacheMap = new Map()
    }

    get(key) {
        if (!this.cacheMap.has(key)) {
            return -1
        }

        const cacheValue = this.cacheMap.get(key)
        this.cacheMap.delete(key)
        this.cacheMap.set(key, cacheValue)

        return cacheValue
    }

    put(key, value) {
        if (this.cacheMap.has(key)) {
            this.cacheMap.delete(key)
        }

        this.cacheMap.set(key, value)

        if (this.cacheMap.size > this.capacity) {
            const oldestKey = this.cacheMap.keys().next().value
            this.cacheMap.delete(oldestKey)
        }
    }
}