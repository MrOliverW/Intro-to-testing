export function isEven(value: number): boolean {
  return value % 2 === 0;
}

export function add(first: number, second: number): number {
  return first + second;
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }

  return dividend / divisor;
}

export function palindrome(value: string): boolean {
  return value === value.split("").reverse().join("");
}

export function countVowels(value: string): number {
  return (value.match(/[aeiou]/gi) ?? []).length;
}

export function findMax(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot find the maximum of an empty array");
  }

  return Math.max(...values);
}

export function removeDuplicates<T>(values: T[]): T[] {
  return [...new Set(values)];
}
