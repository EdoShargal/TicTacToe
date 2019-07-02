class AI extends Player {

    public checkEndGame(board: Board): boolean {
        if (this.checkWin(board)) {
            alert(`O is the winner`);
            return true;
        }
        if (this.checkTie(board)) {
            alert(`It's a tie`);
            return true;
        }
        return false;
    }

    public checkWin(board: Board): boolean {
        return GameLogic.isOWinner(board);
    }

    public move(board: Board): void {
        this.winPick(board) || this.blockPick(board) || this.randomPick(board)
    }

    public randomPick(board: Board): void {
        while (true) {
            try {
                let randomNum: number = Math.floor((Math.random() * 9) + 1);
                board.setO(randomNum);
                break;
            }
            catch (err) {

            }
        }

    }

    public blockPick(board: Board): boolean {
        for (let i: number = 1; i <= Board.size * Board.size; i++) {
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
                console.log(`Error on ${i}`);
            }
        }
        return false;
    }

    public winPick(board: Board): boolean {
        for (let i: number = 1; i <= Board.size * Board.size; i++) {
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
                console.log(`error on location ${i}`);
            }
        }
        return false;
    }


}