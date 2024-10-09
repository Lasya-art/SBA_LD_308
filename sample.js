const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47,
        }
    },

    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150,
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-04-25",
            score: 400,
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39,
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140,
        }
    }
];


function getLearnerData(course, ag, submissions) {
    const result = []
    const currentDate = new Date()

    if (ag.course_id !== course.id) {
        throw new Error("AssignmentGroup does not belong to the provided course.")
    }

    // Looping through each learner's submissions
    for (let i = 0; i < submissions.length; i++) {

        const learnerId = submissions[i].learner_id
        let totalScore = 0
        let totalPointsPossible = 0
        let score = 0

        const learnerResult = { id: learnerId }

        // Loop through each assignment in the group
        for (let j = 0; j < ag.assignments.length; j++) {
            const assignment = ag.assignments[j]

            for (let k = 0; k < submissions.length; k++) {
                if (submissions[k].assignment_id === assignment.id && submissions[k].learner_id === learnerId) {
                    AssignmentSubmission = submissions[k].submission

                }

            }
            if (new Date(assignment.due_at) > currentDate) {
               // console.log("Assignment skiped")
                continue
            }


            if (assignment.points_possible === 0) {
                throw new Error(" points possible cannot be zero.")
            }


            score = AssignmentSubmission.score
            console.log(score)
            if (new Date(submissions.submitted_at) > new Date(assignment.due_at)) {

                score -= (assignment.points_possible * 0.1)
            }

            else {
                score = AssignmentSubmission.score
            }

            const learnersscore = score / assignment.points_possible
            totalScore += learnersscore
            totalPointsPossible += assignment.points_possible

        }

        avg = totalScore / totalPointsPossible
        result.push({ id: learnerId, avg: avg, 1: totalScore, 2: totalPointsPossible })
    }

    return result
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result)

  
  
  