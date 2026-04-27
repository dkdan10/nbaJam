import { describe, expect, it } from 'vitest';
import Rect from './rect.js';

function makeRect(position, size = { width: 20, height: 20 }) {
  const rect = new Rect(size);
  rect.position = position;
  return rect;
}

describe('Rect', () => {
  it('detects rectangle overlap', () => {
    const rect = makeRect({ x: 0, y: 0 });
    const other = makeRect({ x: 10, y: 10 });

    expect(rect.isOverlappingOtherRect(other)).toBe(true);
  });

  it('returns false when rectangles do not overlap', () => {
    const rect = makeRect({ x: 0, y: 0 });
    const other = makeRect({ x: 50, y: 50 });

    expect(rect.isOverlappingOtherRect(other)).toBe(false);
  });
});
