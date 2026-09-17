import { classNames } from "../../../utils/classNames";

import type { Cell } from "./game";

type MineCellProps = {
  cell: Cell;
  row: number;
  column: number;
  gameOver: boolean;
  incorrectFlag: boolean;
  exploded: boolean;
  onReveal: () => void;
  onFlag: () => void;
};

function describeCell(cell: Cell, incorrectFlag: boolean) {
  if (incorrectFlag) return "incorrect flag";
  if (cell.revealed)
    return cell.mine ? "mine" : `${cell.adjacent} neighboring mines`;
  return cell.flagged ? "flagged" : "hidden";
}

function cellSymbol(cell: Cell, incorrectFlag: boolean) {
  if (incorrectFlag) return "×";
  if (cell.revealed) return cell.mine ? "✹" : cell.adjacent || "";
  return cell.flagged ? "⚑" : "";
}

export function MineCell({
  cell,
  row,
  column,
  gameOver,
  incorrectFlag,
  exploded,
  onReveal,
  onFlag,
}: MineCellProps) {
  return (
    <button
      type="button"
      role="gridcell"
      className={classNames(
        "mine-cell",
        cell.revealed && "revealed",
        exploded && "exploded",
      )}
      data-number={cell.adjacent}
      aria-label={`Row ${row + 1}, column ${column + 1}, ${describeCell(cell, incorrectFlag)}`}
      disabled={cell.revealed || gameOver}
      onClick={onReveal}
      onContextMenu={(event) => {
        event.preventDefault();
        onFlag();
      }}
    >
      <span aria-hidden="true">{cellSymbol(cell, incorrectFlag)}</span>
    </button>
  );
}
