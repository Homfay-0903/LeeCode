/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let finishedCourse = 0

    const relation = new Array(numCourses).fill(0).map(() => [])
    const inDegree = new Array(numCourses).fill(0)
    const courseQueue = []

    for (const [curCoures, preCourse] of prerequisites) {
        relation[preCourse].push(curCoures)
        inDegree[curCoures]++
    }

    for (let i = 0; i < numCourses; i++) {
        if (!inDegree[i]) {
            courseQueue.push(i)
        }
    }

    while (courseQueue.length) {
        const learnedCoures = courseQueue.shift()
        finishedCourse++

        for (const nextCourse of relation[learnedCoures]) {
            inDegree[nextCourse]--

            if (!inDegree[nextCourse]) {
                courseQueue.push(nextCourse)
            }
        }
    }

    return finishedCourse === numCourses
};