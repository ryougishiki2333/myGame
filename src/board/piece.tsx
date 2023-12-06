import { CSSProperties } from "react";

export class Piece {
  private shape: number[][];
  private anchor: { x: number; y: number };

  constructor(shape: number[][], anchor: { x: number; y: number }) {
    this.shape = shape;
    this.anchor = anchor;
  }

  private initializeCells(): JSX.Element[] {
    const cells: JSX.Element[] = [];
    const length = 42;
    for (let i = 0; i < this.shape.length; i++) {
      for (let k = 0; k < this.shape[0].length; k++) {
        const cellId = `cell-${i}-${k}`;
        const cellClass = this.shape[i][k] === 1 ? "cell" : "no-cell";
        const cellStyle: CSSProperties =
          this.shape[i][k] === 1
            ? {
                width: length - 2, // 减去边框的宽度
                height: length - 2, // 减去边框的高度
                backgroundColor: "rgb(141, 140, 140)",
                border: "1px solid black",
                margin: 1,
              }
            : {
                width: length,
                height: length,
                margin: 1,
              };
        cells.push(
          <div
            key={cellId}
            className={cellClass}
            id={cellId}
            style={cellStyle}
          ></div>
        );
      }
    }
    return cells;
  }

  private generateStyles(scale: number): CSSProperties {
    const length = 42; // 单个拼图单元的宽度

    return {
      display: "flex",
      flexWrap: "wrap",
      width: (length + 2) * scale,
      height: (length + 2) * scale,
    };
  }

  public getShape(): number[][] {
    return this.shape;
  }

  public setShape(shape: number[][]): void {
    this.shape = shape;
  }

  public getAnchor(): { x: number; y: number } {
    return this.anchor;
  }

  public setAnchor(anchor: { x: number; y: number }): void {
    this.anchor = anchor;
  }

  public render(): JSX.Element {
    const styles = this.generateStyles(this.shape.length);
    return <div style={styles}>{this.initializeCells()}</div>;
  }
}
