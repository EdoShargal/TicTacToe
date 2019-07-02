class Board {
    public static readonly size: number = 3;
    private _matrix: Array<string>[] = new Array<Array<string>>(Board.size);

    public constructor() {
        for (let i = 0; i < Board.size; i++) {
            this._matrix[i] = new Array<string>(Board.size);
        }

        let index: number = 1;
        for (let i = 0; i < Board.size; i++) {
            for (let j = 0; j < Board.size; j++) {
                this._matrix[i][j] = index.toString();
                index++;
            }
        }
    }

    public get matrix(): Array<string>[] {
        return this._matrix;
    }

    public setMove(place: number, move: Move): void {
        if (place < 1 || place > Board.size * Board.size) //check if cell is in the board.
            throw new RangeError(`Invalid slot! Must be 1 to ${Board.size * Board.size}`);
        if (place != Math.round(place))
            throw new TypeError(`Invalid number! must be an integer!`);

        let row: number = Math.floor((place - 1) / Board.size); //check row
        let col: number = (place - 1) % Board.size; //check column

        if (this._matrix[row][col] == "X" || this._matrix[row][col] == "O") //Checks if cell is occupied.
            throw new Error(`The cell is already occupied!`);

        this._matrix[row][col] = Move[move];
    }
    public setX(place: number): void {
        this.setMove(place, Move.X);
    }
    public setO(place: number): void {
        this.setMove(place, Move.O);
    }
    public setMoveBack(board: Board, place: number) {
        let row: number = Math.floor((place - 1) / Board.size); //check row
        let col: number = (place - 1) % Board.size; //check column
        this._matrix[row][col] = place.toString();
    }
}