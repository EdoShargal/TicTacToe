abstract class Player {
    public abstract checkWin(board: Board): boolean;

    public abstract move(board: Board): void;

    public checkTie(board: Board): boolean {
        return GameLogic.isTie(board);
    }
    public abstract checkEndGame(board: Board): boolean;
}
