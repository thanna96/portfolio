import { describe, expect, it } from "vitest";

import {
  BOARD_SIZE,
  MINE_COUNT,
  createGame,
  neighbors,
  plantMines,
  revealCell,
  toggleFlag,
} from "./game";

import type { Game } from "./game";

const fixedRandom = () => 0;

function plantedGame(): Game {
  return {
    ...createGame(),
    status: "playing",
    cells: plantMines(createGame().cells, 40, fixedRandom),
  };
}

describe("Minesweeper", () => {
  it("protects the first cell and its neighbors while placing exactly ten mines", () => {
    for (const first of [0, 40, 80]) {
      const game = revealCell(createGame(), first, fixedRandom);
      expect(game.cells.filter((cell) => cell.mine)).toHaveLength(MINE_COUNT);
      for (const index of [first, ...neighbors(first)])
        expect(game.cells[index].mine).toBe(false);
      expect(game.cells[first].revealed).toBe(true);
      expect(game.cells[first].adjacent).toBe(0);
      expect(game.status).not.toBe("lost");
    }
  });

  it("does not wrap neighboring cells across rows at board edges", () => {
    expect(neighbors(0)).toEqual([1, BOARD_SIZE, BOARD_SIZE + 1]);
    expect(neighbors(8)).toEqual([7, 16, 17]);
    expect(neighbors(40)).toHaveLength(8);
  });

  it("floods empty cells and numbered boundaries, leaving flagged safe cells hidden", () => {
    const original = plantedGame();
    const flagged = toggleFlag(original, 80);
    const game = revealCell(flagged, 40);
    expect(game.cells.filter((cell) => cell.revealed).length).toBeGreaterThan(
      1,
    );
    expect(game.cells.some((cell) => cell.revealed && cell.adjacent > 0)).toBe(
      true,
    );
    expect(game.cells[80]).toMatchObject({ revealed: false, flagged: true });
    expect(
      game.cells.filter((cell) => cell.mine).every((cell) => !cell.revealed),
    ).toBe(true);
    expect(
      original.cells.every((cell) => !cell.revealed && !cell.flagged),
    ).toBe(true);
    expect(revealCell(flagged, 80)).toBe(flagged);
  });

  it("ends the game on a mine and prevents further flags or reveals", () => {
    const original = plantedGame();
    const mine = original.cells.findIndex((cell) => cell.mine);
    const game = revealCell(original, mine);
    expect(game.status).toBe("lost");
    expect(game.exploded).toBe(mine);
    expect(
      game.cells.filter((cell) => cell.mine).every((cell) => cell.revealed),
    ).toBe(true);
    expect(toggleFlag(game, 80)).toBe(game);
    expect(revealCell(game, 80)).toBe(game);
  });

  it("wins by revealing every safe cell, including a cell that was first flagged", () => {
    let game = toggleFlag(plantedGame(), 80);
    game = revealCell(game, 40);
    expect(game.status).toBe("playing");
    game = toggleFlag(game, 80);
    for (let index = 0; index < game.cells.length; index++) {
      if (!game.cells[index].mine) game = revealCell(game, index);
    }
    expect(game.status).toBe("won");
    expect(game.cells.filter((cell) => cell.flagged)).toHaveLength(MINE_COUNT);
    expect(toggleFlag(game, 0)).toBe(game);
  });
});
