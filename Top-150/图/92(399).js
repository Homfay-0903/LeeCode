var calcEquation = function (equations, values, queries) {
    const graph = new Map();
    // 构建图：存储对数权值
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        const logVal = Math.log(val);          // 自然对数
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push({ node: b, logWeight: logVal });
        graph.get(b).push({ node: a, logWeight: -logVal }); // 反向边取负
    }

    const ans = [];
    for (const [c, d] of queries) {
        if (!graph.has(c) || !graph.has(d)) {
            ans.push(-1.0);
            continue;
        }
        if (c === d) {
            ans.push(1.0);
            continue;
        }

        const visited = new Set();
        let found = false;
        let finalLog = 0;

        const dfs = (node, target, logSum) => {
            if (found) return;
            if (node === target) {
                finalLog = logSum;
                found = true;
                return;
            }
            visited.add(node);
            for (const { node: next, logWeight } of graph.get(node) || []) {
                if (!visited.has(next)) {
                    dfs(next, target, logSum + logWeight);
                }
            }
        };

        dfs(c, d, 0);
        ans.push(found ? Math.exp(finalLog) : -1.0);
    }
    return ans;
};