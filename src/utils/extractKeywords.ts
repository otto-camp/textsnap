/**
 * Extracts repetitive keywords from a given text.
 * @param {string} text - The text to extract keywords from.
 * @returns {string[]} An array of repetitive keywords found in the text.
 */

export function extractKeywords(text: string): string[] {
  let words = text.split(' ');

  const stopWords = [
    'a',
    'an',
    'the',
    'of',
    'to',
    'and',
    'or',
    'in',
    'is',
    'it',
  ];
  words = words.filter((word) => !stopWords.includes(word));

  words = words.filter((word) => word.length > 3);

  const wordCount: { [key: string]: number } = {};
  words.forEach((word) => {
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const repetitiveKeywords = Object.keys(wordCount).filter(
    (word) => wordCount[word] > 1
  );

  return repetitiveKeywords;
}
