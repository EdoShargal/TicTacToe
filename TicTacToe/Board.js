var Board = /** @class */ (function () {
    function Board() {
        this._matrix = new Array(Board.size);
        for (var i = 0; i < Board.size; i++) {
            this._matrix[i] = new Array(Board.size);
        }
        var index = 1;
        for (var i = 0; i < Board.size; i++) {
            for (var j = 0; j < Board.size; j++) {
                this._matrix[i][j] = index.toString();
                index++;
            }
        }
    }
    Object.defineProperty(Board.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.setMove = function (place, move) {
        if (place < 1 || place > Board.size * Board.size) //check if cell is in the board.
            throw new RangeError("Invalid slot! Must be 1 to " + Board.size * Board.size);
        if (place != Math.round(place))
            throw new TypeError("Invalid number! must be an integer!");
        var row = Math.floor((place - 1) / Board.size); //check row
        var col = (place - 1) % Board.size; //check column
        if (this._matrix[row][col] == "X" || this._matrix[row][col] == "O") //Checks if cell is occupied.
            throw new Error("The cell is already occupied!");
        this._matrix[row][col] = Move[move];
    };
    Board.prototype.setX = function (place) {
        this.setMove(place, Move.X);
    };
    Board.prototype.setO = function (place) {
        this.setMove(place, Move.O);
    };
    Board.prototype.setMoveBack = function (board, place) {
        var row = Math.floor((place - 1) / Board.size); //check row
        var col = (place - 1) % Board.size; //check column
        this._matrix[row][col] = place.toString();
    };
    Board.size = 3;
    return Board;
}());
//# sourceMappingURL=Board.js.map