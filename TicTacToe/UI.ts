class UI {
    public static display(board: Board): void {
        document.write(`-------------<br>`);
        for (let i = 0; i < Board.size; i++) {
            for (let j = 0; j < Board.size; j++) {
                document.write(`| ${board.matrix[i][j]} `);
            }
            document.write(`|<br>-------------<br>`);
        }
    }

    public static returnDisplay(board: Board): string {
        let str: string = "";
        str = `-------------\n`;
        for (let i = 0; i < Board.size; i++) {
            for (let j = 0; j < Board.size; j++) {
                str += `| ${board.matrix[i][j]} `;
            }
            str += `|\n-------------\n`;
        }
        return str;
    }
}