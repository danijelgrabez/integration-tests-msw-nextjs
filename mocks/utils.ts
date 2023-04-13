// Note: Discuss variations and possible extension. These mocks needs to be flexible, but not too abstract

const splitNum = (num: number) => [...new Array(num)].map((_, index) => index + 1);

export function buildTimes<T>(fn: () => T, n: number): T[] {
  const arr = splitNum(n);
  const res = [];

  for (const time of arr) {
    res.push(fn());
  }

  return res;
}
