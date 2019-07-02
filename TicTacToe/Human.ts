class Human extends Player {
    public getChioce(board: Board): number {
        return Number(prompt(`${UI.returnDisplay(board)}Enter cell number:`))
    }
    public move(board: Board): boolean {
        while (true) {
            try {
                board.setX(this.getChioce(board));
                return true;
            }
            catch (err) {
                alert(err.message);
            }
        }
    }
    public checkWin(board: Board): boolean {
        return GameLogic.isXWinner(board);
    }

    public checkEndGame(board: Board): boolean {
        if (this.checkWin(board)) {
            alert(`X is the winner`);
            return true;
        }
        if (this.checkTie(board)) {
            alert(`It's a tie`);
            return true;
        }
        return false;
    }

}