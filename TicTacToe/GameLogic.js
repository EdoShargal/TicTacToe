var GameLogic = /** @class */ (function () {
    function GameLogic() {
    }
    GameLogic.hasWinner = function (board, piece) {
        var count = 0;
        //checks rows
        for (var i = 0; i < Board.size; i++) {
            count = 0;
            for (var j = 0; j < Board.size; j++) { //checks number of cells equal to 'move'(X/O) in a specific row
                if (board.matrix[i][j] == piece)
                    count++;
            }
            if (count == Board.size)
                return true;
        }
        //checks columns
        for (var i = 0; i < Board.size; i++) {
            count = 0;
            for (var j = 0; j < Board.size; j++) { //checks number of cells equal to 'move'(X/O) in a specific column
                if (board.matrix[j][i] == piece) //Difference between the previous nested loop [j][i](instead of [i][j])
                    count++;
            }
            if (count == Board.size)
                return true;
        }
        //checks diagonal
        count = 0;
        for (var i = 0; i < Board.size; i++) {
            if (board.matrix[i][i] == piece)
                count++;
            if (count == Board.size)
                return true;
        }
        count = 0;
        for (var i = 0; i < Board.size; i++) {
            if (board.matrix[i][Board.size - 1 - i] == piece)
                count++;
            if (count == Board.size)
                return true;
        }
        return false;
    };
    GameLogic.isXWinner = function (board) {
        return GameLogic.hasWinner(board, 'X');
    };
    GameLogic.isOWinner = function (board) {
        return GameLogic.hasWinner(board, 'O');
    };
    GameLogic.isFull = function (board) {
        for (var i = 0; i < Board.size; i++) {
            for (var j = 0; j < Board.size; j++) {
                if (board.matrix[i][j] != "X" && board.matrix[i][j] != "O")
                    return false;
            }
        }
        return true;
    };
    GameLogic.isTie = function (board) {
        return !GameLogic.isXWinner(board) && !GameLogic.isOWinner(board) && GameLogic.isFull(board);
    };
    return GameLogic;
}());
//# sourceMappingURL=GameLogic.js.map