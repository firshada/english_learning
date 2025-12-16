export interface Tense {
    slug: string;
    name: string;
    level: 'A1-A2' | 'B1-B2' | 'C1';
    summary: string;
    descriptionEN: string;
    descriptionIDHint: string;
    patterns: {
        affirmative: string;
        negative: string;
        interrogative: string;
    };
    examples: {
        type: 'positive' | 'negative' | 'question';
        textEN: string;
        textIDHint: string;
    }[];
}

export interface Question {
    id: string;
    tenseSlug: string;
    promptEN: string;
    promptIDHint?: string;
    choices: string[]; // 4 items
    answerIndex: number;
    explanationEN: string;
    explanationIDHint: string;
}
