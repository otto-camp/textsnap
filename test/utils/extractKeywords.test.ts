import { extractKeywords } from '@/utils/extractKeywords';

describe('extractKeywords', () => {
  it('should return repetitive words', () => {
    const text = 'The quick brown fox jumps over the quick dog';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual(['quick']);
  });

  it('should return an empty array if no repetitive words', () => {
    const text = 'The quick brown fox jumps over the lazy dog';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual([]);
  });

  it('should handle repeated words with different capitalization', () => {
    const text = 'The quick brown fox jumps over The quick dog';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual(['quick']);
  });

  it('should handle words with punctuation', () => {
    const text =
      'The quick brown fox jumps over the quick dog, and the lazy cat.';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual(['quick']);
  });

  it('should handle empty input', () => {
    const text = '';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual([]);
  });

  it('should handle input with only stop words', () => {
    const text = 'The of and to';
    const keywords = extractKeywords(text);
    expect(keywords).toEqual([]);
  });
});
