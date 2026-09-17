export const BOARD_SIZE = 9;
export const MINE_COUNT = 10;

export type Cell = {
  mine: boolean;
  adjacent: number;
  revealed: boolean;
  flagged: boolean;
};
export type Game = {
  cells: Cell[];
  status: "ready" | "playing" | "won" | "lost";
  exploded: number | null;
};

export function createGame(): Game {
  return {
    cells: Array.from({ length: BOARD_SIZE * BOARD_SIZE }, () => ({
      mine: false,
      adjacent: 0,
      revealed: false,
      flagged: false,
    })),
    status: "ready",
    exploded: null,
  };
}

export function neighbors(index: number): number[] {
  const row = Math.floor(index / BOARD_SIZE);
  const column = index % BOARD_SIZE;
  const result: number[] = [];
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const y = row + dy;
      const x = column + dx;
      if ((dx || dy) && y >= 0 && y < BOARD_SIZE && x >= 0 && x < BOARD_SIZE) {
        result.push(y * BOARD_SIZE + x);
      }
    }
  }
  return result;
}

/** Place mines only after the first reveal, protecting the whole opening area. */
export function plantMines(
  cells: Cell[],
  firstIndex: number,
  random: () => number = Math.random,
): Cell[] {
  const protectedCells = new Set([firstIndex, ...neighbors(firstIndex)]);
  const candidates = cells
    .map((_, index) => index)
    .filter((i) => !protectedCells.has(i));
  const next = cells.map((cell) => ({ ...cell }));
  for (let i = 0; i < MINE_COUNT; i++) {
    const selected = i + Math.floor(random() * (candidates.length - i));
    [candidates[i], candidates[selected]] = [
      candidates[selected],
      candidates[i],
    ];
    next[candidates[i]].mine = true;
  }
  next.forEach((cell, index) => {
    cell.adjacent = neighbors(index).filter((i) => next[i].mine).length;
  });
  return next;
}

export function toggleFlag(game: Game, index: number): Game {
  if (
    game.status === "won" ||
    game.status === "lost" ||
    game.cells[index].revealed
  )
    return game;
  return {
    ...game,
    cells: game.cells.map((cell, i) =>
      i === index ? { ...cell, flagged: !cell.flagged } : cell,
    ),
  };
}

export function revealCell(
  game: Game,
  index: number,
  random: () => number = Math.random,
): Game {
  if (
    game.status === "won" ||
    game.status === "lost" ||
    game.cells[index].revealed ||
    game.cells[index].flagged
  )
    return game;
  const cells =
    game.status === "ready"
      ? plantMines(game.cells, index, random)
      : game.cells.map((cell) => ({ ...cell }));
  if (cells[index].mine) {
    cells.forEach((cell) => {
      if (cell.mine) cell.revealed = true;
    });
    return { cells, status: "lost", exploded: index };
  }
  const pending = [index];
  while (pending.length) {
    const current = pending.pop()!;
    const cell = cells[current];
    if (cell.revealed || cell.flagged || cell.mine) continue;
    cell.revealed = true;
    if (cell.adjacent === 0) pending.push(...neighbors(current));
  }
  const won = cells.every((cell) => cell.mine || cell.revealed);
  if (won)
    cells.forEach((cell) => {
      if (cell.mine) cell.flagged = true;
    });
  return { cells, status: won ? "won" : "playing", exploded: null };
}
