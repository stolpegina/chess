import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.available = false;
    this.color = color;
    this.id = Math.random();
    this.figure = figure;
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false
    }
    return true
  }
  isEmptyHorisontal(target: Cell): boolean {return true}
  isEmptyDiagonal(target: Cell): boolean {return true}

  moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.canMove(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
