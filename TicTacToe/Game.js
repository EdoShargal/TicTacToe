var Game = /** @class */ (function () {
    function Game(board, human, ai) {
        this._board = new Board();
        this._human = new Human();
        this._ai = new AI();
        this.board = board;
        this.human = human;
        this.ai = ai;
    }
    Object.defineProperty(Game.prototype, "board", {
        get: function () {
            return this._board;
        },
        set: function (value) {
            this._board = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "human", {
        get: function () {
            return this._human;
        },
        set: function (value) {
            this._human = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "ai", {
        get: function () {
            return this._ai;
        },
        set: function (value) {
            this._ai = value;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.play = function () {
        while (true) {
            this.human.move(this.board);
            if (this.human.checkEndGame(this.board)) {
                break;
            }
            this.ai.move(this.board);
            if (this.ai.checkEndGame(this.board)) {
                break;
            }
        }
        UI.display(this.board);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map