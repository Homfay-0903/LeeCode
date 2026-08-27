/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let finishedCount = 0
    const courseQueue = []
    const relation = new Array(numCourses).fill(0).map(() => [])
    const inDegree = new Array(numCourses).fill(0)

    for (const [curCourse, preCourse] of prerequisites) {
        relation[preCourse].push(curCourse)
        inDegree[curCourse]++
    }

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            courseQueue.push(i)
        }
    }

    while (courseQueue.length > 0) {
        const curCourseCount = courseQueue.length

        for (let i = 0; i < curCourseCount; i++) {
            const learnedCourse = courseQueue.shift()
            finishedCount++

            for (const nextCourse of relation[learnedCourse]) {
                inDegree[nextCourse]--

                if (inDegree[nextCourse] === 0) {
                    courseQueue.push(nextCourse)
                }
            }
        }
    }

    return finishedCount === numCourses
};