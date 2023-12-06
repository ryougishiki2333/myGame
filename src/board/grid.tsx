import { CSSProperties } from "react";

export class Grid {
  private gridSize: number;
  private cells: JSX.Element[];

  constructor(gridSize: number) {
    this.gridSize = gridSize;
    this.cells = this.initializeCells();
  }

  private initializeCells(): JSX.Element[] {
    const cells: JSX.Element[] = [];
    const length = 42;
    const cellStyle: CSSProperties = {
      width: length - 2,
      height: length - 2,
      backgroundColor: "lightgray",
      border: "1px solid black",
      margin: 1,
    };
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const cellId = `cell-${i}`;
      cells.push(<div key={cellId} id={cellId} style={cellStyle}></div>);
    }
    return cells;
  }

  private generateStyles(scale: number): CSSProperties {
    const length = 42; // 单个网格单元的宽度

    return {
      display: "flex",
      flexWrap: "wrap",
      width: (length + 2) * scale,
    };
  }

  public render(): JSX.Element {
    const styles = this.generateStyles(this.gridSize);
    return <div style={styles}>{this.cells}</div>;
  }
}
