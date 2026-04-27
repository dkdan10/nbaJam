import { describe, expect, it, vi } from 'vitest';
import Ball from './ball.js';

function makeBall() {
  return new Ball(
    { width: 100, height: 100 },
    { width: 100, position: { y: 85 } },
    { scoreHitbox: { position: { x: 10, y: 10 }, width: 20 } },
    { scoreHitbox: { position: { x: 80, y: 10 }, width: 20 } }
  );
}

describe('Ball', () => {
  it('claims possession when the player is allowed to touch it', () => {
    const ball = makeBall();
    const player = { color: 'red' };

    ball.claimPossession(player);

    expect(ball.possession).toBe(player);
  });

  it('does not claim possession while the player is in no-touch cooldown', () => {
    const ball = makeBall();
    const player = { color: 'red' };
    ball.noTouch.red = true;

    ball.claimPossession(player);

    expect(ball.possession).toBeNull();
  });

  it('releases the ball with velocity and clears possession', () => {
    vi.useFakeTimers();
    const ball = makeBall();
    const player = {
      color: 'red',
      facingRight: true,
      width: 40,
      position: { x: 20, y: 40 }
    };
    ball.possession = player;
    ball.position = { x: 60, y: 40 };
    ball.power = 30;

    ball.releaseBall();

    expect(ball.possession).toBeNull();
    expect(ball.power).toBe(0);
    expect(ball.velocity.x).not.toBe(0);
    expect(ball.velocity.y).not.toBe(0);

    vi.runAllTimers();
    expect(ball.noTouch.red).toBe(false);
    vi.useRealTimers();
  });
});
