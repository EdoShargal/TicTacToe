class GameLogic {
    private static hasWinner(board: Board, piece: string): boolean {
        let count: number = 0;
        //checks rows
        for (let i: number = 0; i < Board.size; i++) {
            count = 0;
            for (let j: number = 0; j < Board.size; j++) { //checks number of cells equal to 'move'(X/O) in a specific row
                if (board.matrix[i][j] == piece)
                    count++;
            }
            if (count == Board.size)
                return true;
        }
        //checks columns
        for (let i: number = 0; i < Board.size; i++) {
            count = 0;
            for (let j: number = 0; j < Board.size; j++) { //checks number of cells equal to 'move'(X/O) in a specific column
                if (board.matrix[j][i] == piece) //Difference between the previous nested loop [j][i](instead of [i][j])
                    count++;
            }
            if (count == Board.size)
                return true;
        }
        //checks diagonal
        count = 0;
        for (let i: number = 0; i < Board.size; i++) {
            if (board.matrix[i][i] == piece)
                count++;
            if (count == Board.size)
                return true;
        }
        count = 0;
        for (let i: number = 0; i < Board.size; i++) {
            if (board.matrix[i][Board.size - 1 - i] == piece)
                count++;
            if (count == Board.size)
                return true;
        }
        return false;
    }
    public static isXWinner(board: Board): boolean {
        return GameLogic.hasWinner(board, 'X');
    }
    public static isOWinner(board: Board): boolean {
        return GameLogic.hasWinner(board, 'O');
    }
    public static isFull(board: Board): boolean {
        for (let i: number = 0; i < Board.size; i++) {
            for (let j: number = 0; j < Board.size; j++) {
                if (board.matrix[i][j] != "X" && board.matrix[i][j] != "O")
                    return false;
            }
        }
        return true;
    }
    public static isTie(board: Board): boolean {
        return !GameLogic.isXWinner(board) && !GameLogic.isOWinner(board) && GameLogic.isFull(board);
    }
}