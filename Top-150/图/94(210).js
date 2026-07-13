/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let finishedCourse = 0

    const res = []
    const courseQueue = []
    const relation = new Array(numCourses).fill(0).map(() => [])
    const inDegree = new Array(numCourses).fill(0)

    for (const [curCourse, preCourse] of prerequisites) {
        relation[preCourse].push(curCourse)
        inDegree[curCourse]++
    }

    for (let i = 0; i < numCourses; i++) {
        if (!inDegree[i]) {
            courseQueue.push(i)
        }
    }

    while (courseQueue.length) {
        const learnedCourse = courseQueue.shift()
        finishedCourse++
        res.push(learnedCourse)

        for (const nextCourse of relation[learnedCourse]) {
            inDegree[nextCourse]--

            if (!inDegree[nextCourse]) {
                courseQueue.push(nextCourse)
            }
        }
    }

    if (numCourses === finishedCourse) {
        return res
    } else {
        return []
    }
};