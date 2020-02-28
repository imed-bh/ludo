var STATUS_WAIT_DICE = 0;
var STATUS_WAIT_MOVE = 1;

var playerIndex = 0;
var playerStatus = STATUS_WAIT_DICE;
var diceValue = 0;
var recentKill = false;

function refresh() {
    for (var i = 0; i < settings.players.length; i++) {
        var player = settings.players[i];
        if (playerStatus == STATUS_WAIT_DICE) {
            dices[player].setValue(i == playerIndex ? 0 : -1);
        }
    }
}

var rollDice = function(player) {
    if (settings.players[playerIndex] != player) return;
    if (playerStatus != STATUS_WAIT_DICE) return;

    diceValue = 1 + Math.floor(Math.random() * 6);
    dices[player].setValue(diceValue);
    playerStatus = STATUS_WAIT_MOVE;

    for (var i = 0; i < 4; i++) {
        if (canMove(player, i))
            return;
    }
    setTimeout(() => nextMove(true), 1000);
};

var pawnPos = {
    R: [-1, -1, -1, -1],
    G: [-1, -1, -1, -1],
    Y: [-1, -1, -1, -1],
    B: [-1, -1, -1, -1],
};

var canMove = function(player, index) {
    if (pawnPos[player][index] < 0 && diceValue != 6) return false;
    if (pawnPos[player][index] + diceValue >= paths[player].length) return false;
    return true;
};

var doMove = function(player, index) {
    if (pawnPos[player][index] < 0) {
        pawnPos[player][index] = 0;
    } else {
        pawnPos[player][index] += diceValue;
    }
    pawns[player][index].position.x = paths[player][pawnPos[player][index]][0] * settings.size;
    pawns[player][index].position.y = paths[player][pawnPos[player][index]][1] * settings.size;
};

var nextMove = function(force) {
    playerStatus = STATUS_WAIT_DICE;
    if (!force && (diceValue == 6 || recentKill)) return;
    playerIndex = (playerIndex + 1) % settings.players.length;
    diceValue = 0;
    refresh();
};



var movePawn = function(player, index) {
    if (settings.players[playerIndex] != player) return;
    if (playerStatus != STATUS_WAIT_MOVE) return;

    if (canMove(player, index)) {
        doMove(player, index);
        nextMove(false);
    }
};

refresh();

