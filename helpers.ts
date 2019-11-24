import { DURATION_TYPE_STR, TENSE_TYPE_STR, QUANTIFY_TYPE_STR } from "./type-strings";

export function parseLocaleObjectToTypings(locale: Locale): string {
  const localeString = locale.locale;

  const headerStr =
    `declare module "javascript-time-ago/locale/${localeString}" {
  var ${locale.locale}: Locale;`

  const footerStr = `
  export = ${localeString};
}
`;

  return headerStr + createLocaleInterfaceString(locale) + DURATION_TYPE_STR + TENSE_TYPE_STR + QUANTIFY_TYPE_STR + footerStr;
}

function createLocaleInterfaceString(localeObj: Locale): string {
  const { locale } = localeObj;

  let localeInterfaceStr = `

  interface Locale {
    locale: "${locale}";`;

  Object.keys(localeObj).forEach((key) => {
    if (key === "locale") return;

    if (key.indexOf("-") === -1) {
      localeInterfaceStr += `
      ${key}: Duration;`
    }
    else {
      localeInterfaceStr += `
      "${key}": Duration;`
    }
  });

  localeInterfaceStr += `
    quantify: (n: number) => keyof QuantifyType;
  }
`
  return localeInterfaceStr;
}

export interface Locale {
  locale: string;
  long?: Duration;
  short?: Duration;
  narrow?: Duration;
};

interface Duration {
  year: any;
  quarter: any;
  month: any;
  week: any;
  day: any;
  hour: any;
  minute: any;
  second: any;
};