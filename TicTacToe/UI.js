var UI = /** @class */ (function () {
    function UI() {
    }
    UI.display = function (board) {
        document.write("-------------<br>");
        for (var i = 0; i < Board.size; i++) {
            for (var j = 0; j < Board.size; j++) {
                document.write("| " + board.matrix[i][j] + " ");
            }
            document.write("|<br>-------------<br>");
        }
    };
    UI.returnDisplay = function (board) {
        var str = "";
        str = "-------------\n";
        for (var i = 0; i < Board.size; i++) {
            for (var j = 0; j < Board.size; j++) {
                str += "| " + board.matrix[i][j] + " ";
            }
            str += "|\n-------------\n";
        }
        return str;
    };
    return UI;
}());
//# sourceMappingURL=UI.js.map