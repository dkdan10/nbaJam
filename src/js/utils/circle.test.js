import { describe, expect, it } from 'vitest';
import Circle from './circle.js';

function makeCircle(position, radius = 10) {
  const circle = new Circle(radius);
  circle.position = position;
  return circle;
}

describe('Circle', () => {
  it('detects overlap with a rectangle', () => {
    const circle = makeCircle({ x: 20, y: 20 });
    const rect = { position: { x: 10, y: 10 }, width: 20, height: 20 };

    expect(circle.isOverlappingRect(rect)).toBe(true);
  });

  it('returns false when the rectangle is outside the radius', () => {
    const circle = makeCircle({ x: 0, y: 0 });
    const rect = { position: { x: 50, y: 50 }, width: 10, height: 10 };

    expect(circle.isOverlappingRect(rect)).toBe(false);
  });
});
