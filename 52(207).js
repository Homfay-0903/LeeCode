/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const relation = new Array(numCourses).fill(0).map(() => [])
    const Depth = new Array(numCourses).fill(0)
    const queue = []
    let finishedCourse = 0

    for (const [course, preCourse] of prerequisites) {
        relation[preCourse].push(course)
        Depth[course]++
    }

    for (let i = 0; i < numCourses; i++) {
        if (!Depth[i]) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        const curCourse = queue.shift()
        finishedCourse++

        for (const nextCourse of relation[curCourse]) {
            Depth[nextCourse]--

            if (!Depth[nextCourse]) {
                queue.push(nextCourse)
            }
        }
    }

    return numCourses === finishedCourse
};