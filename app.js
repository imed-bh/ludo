var app = new Application({ 
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

var boardContainer = new PIXI.Container();
boardContainer.position.x = settings.size;
boardContainer.position.y = 4 * settings.size;
boardContainer.addChild(board);

for (var i = 0; i < settings.players.length; i++) {
    var player = settings.players[i];
    for (var j = 0; j < pawns[player].length; j++) {
        var pawn = pawns[player][j];
        pawn.position.x = spawn[player][j][0] * settings.size;
        pawn.position.y = spawn[player][j][1] * settings.size;
        boardContainer.addChild(pawn);
    }
    var dice = dices[player];
    dice.view.position.x = dicesPos[player][0] * settings.size;
    dice.view.position.y = dicesPos[player][1] * settings.size;
    dice.setValue(-1);
    boardContainer.addChild(dice.view);
}

app.stage.addChild(boardContainer);