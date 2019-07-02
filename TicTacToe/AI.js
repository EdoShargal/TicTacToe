var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AI = /** @class */ (function (_super) {
    __extends(AI, _super);
    function AI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AI.prototype.checkEndGame = function (board) {
        if (this.checkWin(board)) {
            alert("O is the winner");
            return true;
        }
        if (this.checkTie(board)) {
            alert("It's a tie");
            return true;
        }
        return false;
    };
    AI.prototype.checkWin = function (board) {
        return GameLogic.isOWinner(board);
    };
    AI.prototype.move = function (board) {
        this.winPick(board) || this.blockPick(board) || this.randomPick(board);
    };
    AI.prototype.randomPick = function (board) {
        while (true) {
            try {
                var randomNum = Math.floor((Math.random() * 9) + 1);
                board.setO(randomNum);
                break;
            }
            catch (err) {
            }
        }
    };
    AI.prototype.blockPick = function (board) {
        for (var i = 1; i <= Board.size * Board.size; i++) {
            try {
                board.setX(i);
                if (GameLogic.isXWinner(board)) {
                    board.setMoveBack(board, i);
                    board.setO(i);
                    return true;
                }
                else {
                    board.setMoveBack(board, i);
                }
            }
            catch (err) {
                console.log("Error on " + i);
            }
        }
        return false;
    };
    AI.prototype.winPick = function (board) {
        for (var i = 1; i <= Board.size * Board.size; i++) {
            try {
                board.setO(i);
                if (GameLogic.isOWinner(board)) {
                    return true;
                }
                else {
                    board.setMoveBack(board, i);
                }
            }
            catch (err) {
                console.log("error on location " + i);
            }
        }
        return false;
    };
    return AI;
}(Player));
//# sourceMappingURL=AI.js.map