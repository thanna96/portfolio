import { useEffect, useState } from "react";

import {
  BOARD_SIZE,
  MINE_COUNT,
  createGame,
  revealCell,
  toggleFlag,
} from "./minesweeper/game";
import { MineCell } from "./minesweeper/MineCell";
import { RetroWindow } from "./RetroWindow";

import type { WindowProps } from "./windowTypes";
import "./minesweeper/Minesweeper.css";

function counter(value: number) {
  return value < 0
    ? `-${String(Math.abs(value)).padStart(2, "0")}`
    : String(value).padStart(3, "0");
}

export default function MinesweeperWindow({ visible, close }: WindowProps) {
  const [game, setGame] = useState(createGame);
  const [seconds, setSeconds] = useState(0);
  const [flagMode, setFlagMode] = useState(false);
  useEffect(() => {
    if (game.status !== "playing") return;
    const timer = window.setInterval(
      () => setSeconds((value) => Math.min(value + 1, 999)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [game.status]);

  const reset = () => {
    setGame(createGame());
    setSeconds(0);
  };
  const statusMessages = {
    ready: "Find all 10 mines.",
    playing: "Find all 10 mines.",
    won: "You win! All mines found.",
    lost: "Game over. Try again!",
  };
  const statusFaces = { ready: "☺", playing: "☺", won: "😎", lost: "☹" };
  const gameOver = game.status === "won" || game.status === "lost";
  const reveal = (index: number) =>
    setGame((current) =>
      flagMode ? toggleFlag(current, index) : revealCell(current, index),
    );
  const flag = (index: number) =>
    setGame((current) => toggleFlag(current, index));
  const flags = game.cells.filter((cell) => cell.flagged).length;

  return (
    <RetroWindow
      visible={visible}
      close={close}
      title="Minesweeper"
      icon="/minesweeper.svg"
      width={340}
      height={500}
      contentClassName="minesweeper-content"
    >
      <div className="minesweeper">
        <div className="mine-menu">
          <button type="button" onClick={reset}>
            New game
          </button>
          <span>Beginner</span>
        </div>
        <div className="mine-panel">
          <output
            className="mine-counter"
            aria-label={`${MINE_COUNT - flags} mines remaining`}
          >
            {counter(MINE_COUNT - flags)}
          </output>
          <button
            type="button"
            className="mine-reset"
            aria-label="Start a new Minesweeper game"
            onClick={reset}
          >
            <span aria-hidden="true">{statusFaces[game.status]}</span>
          </button>
          <output
            className="mine-counter"
            aria-label={`Elapsed time ${seconds} seconds`}
          >
            {counter(seconds)}
          </output>
        </div>
        <div className="mine-board" role="grid" aria-label="Minesweeper board">
          {Array.from({ length: BOARD_SIZE }, (_, row) => (
            <div className="mine-row" role="row" key={row}>
              {game.cells
                .slice(row * BOARD_SIZE, (row + 1) * BOARD_SIZE)
                .map((cell, column) => {
                  const index = row * BOARD_SIZE + column;
                  return (
                    <MineCell
                      key={index}
                      cell={cell}
                      row={row}
                      column={column}
                      gameOver={gameOver}
                      incorrectFlag={
                        game.status === "lost" && cell.flagged && !cell.mine
                      }
                      exploded={game.exploded === index}
                      onReveal={() => reveal(index)}
                      onFlag={() => flag(index)}
                    />
                  );
                })}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mine-flag-mode"
          aria-pressed={flagMode}
          onClick={() => setFlagMode((value) => !value)}
        >
          ⚑ Flag mode: {flagMode ? "On" : "Off"}
        </button>
        <p className="mine-status" role="status">
          {statusMessages[game.status]}
        </p>
        <p className="mine-help">
          Click to reveal. Right-click or use flag mode to mark mines.
        </p>
      </div>
    </RetroWindow>
  );
}
