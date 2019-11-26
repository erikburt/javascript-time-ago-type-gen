export const IMPORT_STRING = `import { Duration, QuantifyType } from "..";`

export const DURATION_TYPE_STR = `
interface Duration {
    year: Tense;
    quarter: Tense;
    month: Tense;
    week: Tense;
    day: Tense;
    hour: Tense;
    minute: Tense;
    second: Tense;
}
`;

export const TENSE_TYPE_STR = `
interface Tense {
    previous?: QuantifyType | string;
    current?: QuantifyType | string;
    next?: QuantifyType | string;
    past?: QuantifyType | string;
    future?: QuantifyType | string;
}
`

export const QUANTIFY_TYPE_STR = `
interface QuantifyType {
    one: string;
    two?: string;
    few?: string;
    other: string;
}
`