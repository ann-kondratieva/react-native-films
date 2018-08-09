const countAverage = (marks) => {
    let averageMark = 0;
    marks.forEach(element => {
        averageMark += element.mark;
    });
    averageMark = Math.round(averageMark / marks.length);
    return averageMark;
};

export default countAverage;