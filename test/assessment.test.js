import {AssessmentApp} from '../src/assessment'
import dimensions from "../src/dimensions";

// Feel free to rewrite this test suite. This is provided as guidance.
describe('AssessmentApp', () => {
    const assessmentApp = new AssessmentApp();
    it('should have 30 questions', () => {
        expect(assessmentApp.getAssessment(dimensions)).toHaveLength(30);
    });

    it('should not show the same answer twice', () => {
        let answerList = [];
        assessmentApp.getAssessment(dimensions).forEach(question => {
            answerList.push(question.answerA);
            answerList.push(question.answerB);
        });

        expect(new Set(answerList).size).toBe(answerList.length);
    });

    // it('should match each dimension to the other dimensions exactly 2 times', () => {
    //   expect('this test').toBe('failing');
    // });

    // it('should provide ipsative questions (two possible answers)', () => {
    //   expect('this test').toBe('failing');
    // });
    // describe('when completed', () => {
    //   it('should provide the results as an object', () => {
    //     expect('this test').toBe('failing');
    //   });
    //   it('should represent the results based on 6 dimensions', () => {
    //     expect('this test').toBe('failing');
    //   });
    // });
});