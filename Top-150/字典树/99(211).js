
var WordDictionary = function () {
    this.root = {
        children: {},
        isEnd: false
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curNode = this.root

    for (const char of word) {
        if (!curNode.children[char]) {
            curNode.children[char] = {
                children: {},
                isEnd: false
            }
        }

        curNode = curNode.children[char]
    }

    curNode.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const dfs = (node, index) => {
        if (index === word.length) {
            return node.isEnd
        }

        const curChar = word[index]

        if (curChar === '.') {
            for (const key in node.children) {
                if (dfs(node.children[key], index + 1)) {
                    return true
                }
            }

            return false
        } else {
            if (!node.children[curChar]) {
                return false
            }

            return dfs(node.children[curChar], index + 1)
        }
    }

    return dfs(this.root, 0)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */