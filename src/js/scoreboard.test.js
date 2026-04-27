import { afterEach, describe, expect, it, vi } from 'vitest';
import Scoreboard from './scoreboard.js';

describe('Scoreboard', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('counts down once per second and stops at zero', () => {
    vi.useFakeTimers();
    const scoreboard = new Scoreboard({}, { score: 0 }, { score: 0 });

    vi.advanceTimersByTime(1000);
    expect(scoreboard.timeLeft).toBe(59);

    vi.advanceTimersByTime(59000);
    expect(scoreboard.timeLeft).toBe(0);

    vi.advanceTimersByTime(1000);
    expect(scoreboard.timeLeft).toBe(0);
  });
});
