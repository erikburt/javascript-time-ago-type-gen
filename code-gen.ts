import { ls, mkdir } from "shelljs";
import { join, basename, extname } from "path";
import { readFileSync, writeFileSync } from "fs";

import { Locale, parseLocaleObjectToTypings } from "./helpers";

const EXTRA_STLYE_PATH = "./node_modules/javascript-time-ago/locale-more-styles/";
const RTF_LOCALE_PATH = "./node_modules/relative-time-format/locale/";

console.log("Running script");

const filterForJson = (filename: string) => extname(filename) === ".json";
const stripExtension = (filename: string) => basename(filename, extname(filename));
const arrayToObjKeys = (accumulator: { [key: string]: true }, entry: string) => {
  accumulator[entry] = true;
  return accumulator;
}

// Get all the locales from relative-time-format and loop over them
let rtfLocales: Locale[] = ls(RTF_LOCALE_PATH).map(locale => {

  // Get all the normal locale types/formats from relative-time-format
  const localeDirPath = join(RTF_LOCALE_PATH, locale);
  const localeFiles = ls(localeDirPath)
    .filter(filterForJson)
    .map(stripExtension)
    .reduce(arrayToObjKeys, {});

  // Get all the extra formats from javascript-time-ago
  const extraStylesDirPath = join(EXTRA_STLYE_PATH, locale);
  const extraFiles = ls(extraStylesDirPath)
    .filter(filterForJson)
    .map(stripExtension)
    .reduce(arrayToObjKeys, {});

  return { locale, ...localeFiles, ...extraFiles };
});

// Format and write each definitions file
rtfLocales.forEach(lObj => {
  const { locale } = lObj;
  const typeStr = parseLocaleObjectToTypings(lObj);

  const dir = join("./types/javascript-time-ago/locale", locale);
  mkdir("-p", dir);
  writeFileSync(join(dir, "index.d.ts"), typeStr, "utf8");
});

// writeFileSync("out.json", JSON.stringify(rtfLocales, null, 2), "utf8");

