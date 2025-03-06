export function calcFormStats(visits: number, submissions: number) {
    let submissionRate = 0

    if (visits > 0) {
        submissionRate = (submissions/visits) * 100
    }

    const bounceRate = 100 - submissionRate

    return {
        visits, 
        submissions, 
        submissionRate: Math.round(submissionRate * 100) / 100, 
        bounceRate: Math.round(bounceRate * 100) / 100 
    };
}

