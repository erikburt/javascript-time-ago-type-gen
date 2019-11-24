import TimeAgo from "javascript-time-ago";
import * as en from "javascript-time-ago/locale/en";
import * as to from "javascript-time-ago/locale/to";

console.log(TimeAgo.locale(en));
TimeAgo.addLocale(to);

console.log(TimeAgo.intlDateTimeFormatSupportedLocale("en"));

let ta = new TimeAgo();

console.log(ta.format(new Date().getTime() - 60 * 1000, "twitter"));
console.log(ta.format(111111, "twitter"));
console.log(ta.formatNumber(1111111));
console.log(ta.formatValue(new Date(), "hour", en.long));
console.log(ta.getFormatter("long"));
console.log(ta.getLocaleData("long"));

console.log(ta.getRule(new Date(), "hour", en.long));



