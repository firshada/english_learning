import type { Question } from '../types';
import { presentSimpleQuestions } from './present-simple';
import { presentContinuousQuestions } from './present-continuous';
import { pastSimpleQuestions } from './past-simple';
import { futureSimpleQuestions } from './future-simple';
import { presentPerfectQuestions } from './present-perfect';
import { pastContinuousQuestions } from './past-continuous';
import { pastPerfectQuestions } from './past-perfect';
import { presentPerfectContinuousQuestions } from './present-perfect-continuous';
import { futureContinuousQuestions } from './future-continuous';
import { futurePerfectQuestions } from './future-perfect';
import { pastPerfectContinuousQuestions } from './past-perfect-continuous';
import { futurePerfectContinuousQuestions } from './future-perfect-continuous';
import { pastFutureSimpleQuestions } from './past-future-simple';
import { pastFutureContinuousQuestions } from './past-future-continuous';
import { pastFuturePerfectQuestions } from './past-future-perfect';
import { pastFuturePerfectContinuousQuestions } from './past-future-perfect-continuous';

export const allQuestions: Question[] = [
    ...presentSimpleQuestions,
    ...presentContinuousQuestions,
    ...pastSimpleQuestions,
    ...futureSimpleQuestions,
    ...presentPerfectQuestions,
    ...pastContinuousQuestions,
    ...pastPerfectQuestions,
    ...presentPerfectContinuousQuestions,
    ...futureContinuousQuestions,
    ...futurePerfectQuestions,
    ...pastPerfectContinuousQuestions,
    ...futurePerfectContinuousQuestions,
    ...pastFutureSimpleQuestions,
    ...pastFutureContinuousQuestions,
    ...pastFuturePerfectQuestions,
    ...pastFuturePerfectContinuousQuestions,
];

export const questionsByTense = {
    'present-simple': presentSimpleQuestions,
    'present-continuous': presentContinuousQuestions,
    'past-simple': pastSimpleQuestions,
    'future-simple': futureSimpleQuestions,
    'present-perfect': presentPerfectQuestions,
    'past-continuous': pastContinuousQuestions,
    'past-perfect': pastPerfectQuestions,
    'present-perfect-continuous': presentPerfectContinuousQuestions,
    'future-continuous': futureContinuousQuestions,
    'future-perfect': futurePerfectQuestions,
    'past-perfect-continuous': pastPerfectContinuousQuestions,
    'future-perfect-continuous': futurePerfectContinuousQuestions,
    'past-future-simple': pastFutureSimpleQuestions,
    'past-future-continuous': pastFutureContinuousQuestions,
    'past-future-perfect': pastFuturePerfectQuestions,
    'past-future-perfect-continuous': pastFuturePerfectContinuousQuestions,
};
