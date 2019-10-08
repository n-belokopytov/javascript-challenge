export class AssessmentApp {

    constructor() {
    };

    getAssessment(inputDimensions) {
        let availableDimensions = [...inputDimensions];
        let assessmentQuestions = [];

        assessmentQuestions = assessmentQuestions.concat(this.pullIpsativeQuestionsList(availableDimensions));

        return assessmentQuestions;
    };

    // Warning modifies the state inside input parameters
    pullIpsativeQuestionsList(availableDimensions) {
        let questionsList = [];

        availableDimensions.forEach(dimensionA => {
                let leftoverDimensions = [...availableDimensions.filter(dimension => dimension.name !== dimensionA.name)];
                while (leftoverDimensions.length > 0 && dimensionA.answers.length > 0) {
                    let currentDimensionBIndex = this.randomInRange(0, leftoverDimensions.length - 1);
                    let dimensionB = leftoverDimensions[currentDimensionBIndex];
                    questionsList.push(this.pullTwoDimensionQuestion(dimensionA, dimensionB));
                    leftoverDimensions.splice(currentDimensionBIndex, 1);
                }
            }
        );

        return questionsList;
    };

    randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Warning modifies the state inside input parameters
    pullTwoDimensionQuestion(dimensionA, dimensionB) {
        return {
            answerA: this.pullRandomAnswer(dimensionA),
            answerB: this.pullRandomAnswer(dimensionB)
        };
    };

    // Warning modifies the state inside input parameters
    pullRandomAnswer(dimension) {
        if (dimension.answers.length > 0) {
            let randomAnswerIndex = this.randomInRange(0, dimension.answers.length - 1);
            let result = dimension.answers[randomAnswerIndex];
            dimension.answers.splice(randomAnswerIndex, 1);
            return result;
        } else {
            throw Error();
        }
    };
}
