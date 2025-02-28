export function calcFormStats(visits: number, submissions: number) {
    let submissionRate = 0

    if (visits > 0) {
        submissionRate = (submissions/visits) * 100
    }

    const bounceRate = 100 - submissionRate

    return {
        visits, submissions, submissionRate, bounceRate
    }
}

