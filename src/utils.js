export const processAmount = calculatedAmount => {
  const stringifiedAmount = calculatedAmount.toString();
  const wholeValue = stringifiedAmount.split(".")[0];
  const wholeValueLength = wholeValue.length;
  let processedAmount;
  if (stringifiedAmount.includes("e")) {
    const exponent = stringifiedAmount.split("e")[1];
    processedAmount = `${stringifiedAmount.slice(0, 5)}e${exponent}`;
  } else if (wholeValue === "0" || wholeValueLength <= 3) {
    processedAmount = `${wholeValue}.${stringifiedAmount.slice(
      wholeValueLength + 1,
      wholeValueLength + 7
    )} `;
  } else if (wholeValueLength <= 6) {
    processedAmount = `${wholeValue.slice(
      0,
      wholeValueLength - 3
    )},${wholeValue.slice(wholeValueLength - 3, wholeValueLength)}`;
  } else if (wholeValueLength <= 9) {
    processedAmount = `${wholeValue.slice(
      0,
      wholeValueLength - 6
    )}.${wholeValue.slice(wholeValueLength - 6, wholeValueLength - 4)}m`;
  } else if (wholeValueLength <= 12) {
    processedAmount = `${wholeValue.slice(
      0,
      wholeValueLength - 9
    )}.${wholeValue.slice(wholeValueLength - 9, wholeValueLength - 7)}b`;
  } else if (wholeValueLength <= 15) {
    processedAmount = `${wholeValue.slice(
      0,
      wholeValueLength - 12
    )}.${wholeValue.slice(wholeValueLength - 12, wholeValueLength - 10)}t`;
  } else if (wholeValueLength > 15) {
    processedAmount = `${wholeValue[0]}.${wholeValue.slice(
      1,
      4
    )}e+${wholeValueLength - 1}`;
  }
  return processedAmount;
};

export const doNothing = () => true;
