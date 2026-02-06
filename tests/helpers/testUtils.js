export const isValidCountryCode = (code) => {
  return /^[a-z]{2}$/.test(code);
};

export const isValidUSStateCode = (code) => {
  return /^us-[a-z]{2}$/.test(code);
};

export const isValidIndiaStateCode = (code) => {
  return /^in-[a-z]{2}$/.test(code);
};

export const hasNoDuplicates = (array) => {
  return array.length === new Set(array).size;
};

export const arraysDoNotOverlap = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return !arr2.some(item => set1.has(item));
};
