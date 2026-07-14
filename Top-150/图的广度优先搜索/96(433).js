/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    const bankSet = new Set(bank)

    if (!bankSet.has(endGene)) {
        return -1
    }

    const queue = [[startGene, 0]]
    const visited = new Set([startGene])
    const geneChars = ['A', 'G', 'T', 'C']

    while (queue.length) {
        const [curGene, steps] = queue.shift()

        if (curGene === endGene) {
            return steps
        }

        for (let i = 0; i < curGene.length; i++) {
            for (const char of geneChars) {
                if (char === curGene[i]) {
                    continue
                }

                const nextGene = curGene.slice(0, i) + char + curGene.slice(i + 1)

                //if (nextGene === endGene) {
                //    return steps + 1
                //}

                if (bankSet.has(nextGene) && !visited.has(nextGene)) {
                    queue.push([nextGene, steps + 1])
                    visited.add(nextGene)
                }
            }
        }
    }

    return - 1
};