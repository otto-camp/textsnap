/**
 * Calculates the estimated reading time for a given text.
 * @param {string} text - The text to calculate the reading time for.
 * @param {number} [wordsPerMinute=200] - The average words per minute for reading. Defaults to 200.
 * @returns {number} The estimated reading time in minutes.
 */
export function readingTime(
  text: string,
  wordsPerMinute: number = 200
): number {
  const words = text.split(' ').length;

  if (words === 1) {
    const t = text.trim().split('').length;
    if (t === 0) {
      return 0;
    }
  }

  return Math.ceil(words / wordsPerMinute);
}
