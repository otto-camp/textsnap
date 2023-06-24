import { readingTime } from '@/utils/readingTime';

describe('readingTime', () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  it('should calculate the reading time correctly for a given text and words per minute', () => {
    expect(readingTime(text, 200)).toBe(1);
  });

  it('should return 0 for an empty text', () => {
    expect(readingTime('', 200)).toBe(0);
  });

  it('should calculate the reading time correctly for a longer text and higher words per minute', () => {
    const longText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor scelerisque dui, non tristique lectus cursus eu. Vivamus congue massa id magna consequat, ac aliquet arcu aliquet.';
    expect(readingTime(longText, 200)).toBe(1);
  });
});
