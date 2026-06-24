/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const result = [];
    let i = 0;
    const n = words.length;

    while (i < n) {
        // 1. 贪心确定当前行能容纳的单词
        let lineWords = [];
        let lineCharCount = 0; // 当前行单词的总字符数（不含空格）

        // 尝试将单词 words[i] 加入当前行
        // 判断条件：当前行字符数 + 新单词长度 + (lineWords.length) 个最小间隔空格 <= maxWidth
        while (i < n && lineCharCount + words[i].length + lineWords.length <= maxWidth) {
            lineWords.push(words[i]);
            lineCharCount += words[i].length;
            i++;
        }

        // 2. 格式化当前行
        const isLastLine = (i === n);
        const numWords = lineWords.length;
        let line = '';

        // 情况1: 最后一行 或 该行只有一个单词 -> 左对齐
        if (isLastLine || numWords === 1) {
            line = lineWords.join(' ');
            line += ' '.repeat(maxWidth - line.length);
        }
        // 情况2: 普通行（非最后一行，且包含多个单词）-> 两端对齐
        else {
            const totalSpaces = maxWidth - lineCharCount;
            const gaps = numWords - 1;
            // 计算每个间隙的基础空格数和需要多分配一个空格的间隙数量（左侧优先）
            const spacePerGap = Math.floor(totalSpaces / gaps);
            const extraSpaces = totalSpaces % gaps;

            // 前 extraSpaces 个间隙分配 spacePerGap + 1 个空格
            for (let j = 0; j < numWords - 1; j++) {
                line += lineWords[j];
                // 当前间隙应分配的空格数
                const spacesToAdd = spacePerGap + (j < extraSpaces ? 1 : 0);
                line += ' '.repeat(spacesToAdd);
            }
            // 追加最后一个单词
            line += lineWords[numWords - 1];
        }

        result.push(line);
    }

    return result;
};