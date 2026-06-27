/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    // 边界处理
    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const n = s.length;

    if (n < totalLen) return [];

    // 构建 need 哈希表
    const need = new Map();
    for (const word of words) {
        need.set(word, (need.get(word) || 0) + 1);
    }

    const result = [];

    // 遍历所有可能的起始偏移量 (0 到 wordLen-1)
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let right = offset;
        let matched = 0;
        const window = new Map();

        while (right + wordLen <= n) {
            // 取出当前单词
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            // 如果当前单词不在 need 中，窗口彻底失效，重置
            if (!need.has(word)) {
                window.clear();
                matched = 0;
                left = right;
                continue;
            }

            // 更新窗口频率
            window.set(word, (window.get(word) || 0) + 1);

            // 如果该单词频率未超标，匹配数 +1
            if (window.get(word) <= need.get(word)) {
                matched++;
            }

            // 如果该单词频率超标，收缩左边界
            while (window.get(word) > need.get(word)) {
                const leftWord = s.substring(left, left + wordLen);
                window.set(leftWord, window.get(leftWord) - 1);

                // 如果收缩后该单词频率低于需求，匹配数 -1
                if (window.get(leftWord) < need.get(leftWord)) {
                    matched--;
                }
                left += wordLen;
            }

            // 如果匹配数等于总单词数，记录答案
            if (matched === wordCount) {
                result.push(left);

                // 将左边界向右移动一个单词，继续寻找下一个答案
                const leftWord = s.substring(left, left + wordLen);
                window.set(leftWord, window.get(leftWord) - 1);
                if (window.get(leftWord) < need.get(leftWord)) {
                    matched--;
                }
                left += wordLen;
            }
        }
    }

    return result;
};