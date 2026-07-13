/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const graph = new Map()

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i]
        const logVal = Math.log(values[i])

        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }

        graph.get(a).push({ node: b, logWeight: logVal })
        graph.get(b).push({ node: a, logWeight: -logVal })
    }

    const ans = []

    for (const [c, d] of queries) {
        if (!graph.has(c) || !graph.has(d)) {
            ans.push(-1.0)
            continue
        }

        if (c === d) {
            ans.push(1.0)
            continue
        }

        let found = false
        let finalLog = 0
        const visited = new Set()

        const dfs = (node, target, logSum) => {
            if (found) {
                return
            }

            if (node === target) {
                found = true
                finalLog = logSum
                return
            }

            visited.add(node)

            for (const { node: next, logWeight } of graph.get(node) || []) {
                if (!visited.has(next)) {
                    dfs(next, target, logSum + logWeight)
                }
            }
        }

        dfs(c, d, 0)

        ans.push(found ? Math.exp(finalLog) : -1.0)
    }

    return ans
};