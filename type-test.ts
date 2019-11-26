import TimeAgo from "javascript-time-ago";
import * as en from "javascript-time-ago/locale/en";
import * as to from "javascript-time-ago/locale/to";

console.log(TimeAgo.locale(en)); // undefined
TimeAgo.addLocale(to);

console.log(TimeAgo.intlDateTimeFormatSupportedLocale("en")); // en

let ta = new TimeAgo();

console.log(ta.format(new Date().getTime() - 60 * 1000, "twitter")); // 1m
console.log(ta.format(111111, "twitter")); // Dec 31, 1969
console.log(ta.formatNumber(1111111)); // 1,111,111
console.log(ta.formatValue(new Date(), "hour", en.long)); // in 1,574,740,194,197 hours
console.log(ta.getFormatter("long")); // Object
console.log(ta.getLocaleData("long")); // Object
console.log(ta.getRule(new Date(), "hour", en.long)); // in {0} hours
