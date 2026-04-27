import { beforeEach, describe, expect, it, vi } from 'vitest';
import Player from './player.js';
import Player2 from './player2.js';

function makeBall() {
  return {
    possession: null,
    isOverlappingRect: vi.fn(() => false),
    claimPossession: vi.fn(),
    shoot: vi.fn()
  };
}

describe('Player', () => {
  beforeEach(() => {
    global.Image = class {
      constructor() {
        this.height = 90;
      }
    };
  });

  it('keeps player one inside the court bounds', () => {
    const court = { width: 100, position: { y: 80 } };
    const player = new Player(court, makeBall(), 'sprite.png');

    player.position.x = 120;
    player.checkBounds();
    expect(player.position.x).toBe(60);

    player.position.x = -10;
    player.checkBounds();
    expect(player.position.x).toBe(0);
  });

  it('starts player two on the left side of the court', () => {
    const court = { width: 100, position: { y: 80 } };
    const player = new Player2(court, makeBall(), 'sprite.png');

    expect(player.position).toEqual({ x: 0, y: 10 });
    expect(player.facingRight).toBe(false);
  });

  it('shoots when performing an action with possession', () => {
    const court = { width: 100, position: { y: 80 } };
    const ball = makeBall();
    const player = new Player(court, ball, 'sprite.png');
    ball.possession = player;

    player.performAction();

    expect(ball.shoot).toHaveBeenCalledOnce();
  });
});
