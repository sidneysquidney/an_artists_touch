export default function quoteFunction(smallWindows, bigWindows, nooks) {
  let quote = 0;
  quote += smallWindows * 5;
  quote += bigWindows * 10;
  quote += nooks * 10;
  if (quote > 30) {
    return quote;
  } else {
    return 30;
  }
}
