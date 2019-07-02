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
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.getChioce = function (board) {
        return Number(prompt(UI.returnDisplay(board) + "Enter cell number:"));
    };
    Human.prototype.move = function (board) {
        while (true) {
            try {
                board.setX(this.getChioce(board));
                return true;
            }
            catch (err) {
                alert(err.message);
            }
        }
    };
    Human.prototype.checkWin = function (board) {
        return GameLogic.isXWinner(board);
    };
    Human.prototype.checkEndGame = function (board) {
        if (this.checkWin(board)) {
            alert("X is the winner");
            return true;
        }
        if (this.checkTie(board)) {
            alert("It's a tie");
            return true;
        }
        return false;
    };
    return Human;
}(Player));
//# sourceMappingURL=Human.js.map