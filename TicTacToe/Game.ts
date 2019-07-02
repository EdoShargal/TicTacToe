class Game {
    private _board: Board = new Board();
    private _human: Human = new Human();
    private _ai: AI = new AI();

    public constructor(board: Board, human: Human, ai: AI) {
        this.board = board;
        this.human = human;
        this.ai = ai;
    }

    public get board(): Board {
        return this._board;
    }
    public get human(): Human {
        return this._human;
    }
    public get ai(): AI {
        return this._ai;
    }
    public set human(value: Human) {
        this._human = value;
    }
    public set ai(value: AI) {
        this._ai = value;
    }
    public set board(value: Board) {
        this._board = value;
    }


    public play(): void {
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
    }
}