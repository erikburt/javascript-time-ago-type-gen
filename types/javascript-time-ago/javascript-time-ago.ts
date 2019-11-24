// Type definitions for javascript-time-ago 2.0.4
// Project: https://github.com/catamphetamine/javascript-time-ago
// Definitions by: Erik Burton <https://github.com/erikburt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "javascript-time-ago" {
  export = TimeAgo;

  class TimeAgo {
    constructor();
    constructor(locales: string | string[]);

    format(input: Date | number, style?: string): string;
    formatNumber(number: number): string;
    formatValue(value: Date | number, unit: TimeUnit, localeData: Duration): string;
    getFormatter(flavor: DefaultFormats): RTFFormatter;
    getLocaleData(format?: Formats): Duration; // Defaults to "long"
    getRule(value: Date | number, unit: TimeUnit, localeData: Duration): string;

    static addLocale(localeData: Locale): void;
    static locale(localeData: Locale): void;
    static getDefaultLocale(): string;
    static intlDateTimeFormatSupported(): boolean;
    static intlDateTimeFormatSupportedLocale(locale: string): string | void;
    static setDefaultLocale(locale: string): void;
  }

  interface Locale {
    locale: string;
    long?: Duration;
    short?: Duration;
    narrow?: Duration;
    tiny?: Duration;
    "short-time"?: Duration;
    "short-convenient"?: Duration;
    "long-time"?: Duration;
    "long-convenient"?: Duration;
    quantify: (n: number) => keyof QuantifyType;
  }

  type DefaultFormats = "long" | "short" | "narrow";
  type ExtendedFormats = "tiny" | "short-time" | "short-convenient" | "long-time" | "long-convenient";
  type Formats = DefaultFormats | ExtendedFormats;

  type TimeUnit = 'now' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

  interface Duration {
    flavour?: Formats;
    year: Tense;
    quarter: Tense;
    month: Tense;
    week: Tense;
    day: Tense;
    hour: Tense;
    minute: Tense;
    second: Tense;
  }

  interface Tense {
    previous?: QuantifyType | string;
    current?: QuantifyType | string;
    next?: QuantifyType | string;
    past?: QuantifyType | string;
    future?: QuantifyType | string;
  }

  interface QuantifyType {
    one: string;
    two?: string;
    few?: string;
    other: string;
  }

  interface RTFFormatter {
    numeric: string;
    style: DefaultFormats;
    localeMatcher: string;
    locale: string;
    numberFormat: { [key: string]: any };
  }
}
