export function compareString(str1: string, str2: string): number {
  const lengthStr1 = str1.length;
  const lengthStr2 = str2.length;
  const longestStrLen = Math.max(lengthStr1, lengthStr2);

  let differenceSum = 0;
  for (let i = 0; i < longestStrLen; ++i) {
    const charCodeStr1 = str1.charCodeAt(i) || 0;
    const charCodeStr2 = str2.charCodeAt(i) || 0;
    differenceSum += charCodeStr1 - charCodeStr2;
  }

  return differenceSum / Math.max(Math.abs(differenceSum), 1);
}
