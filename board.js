var board = new Graphics();

let u = settings.size;
let fill = {
    R: settings.color['R'],
    B: settings.color['B'],
    G: settings.color['G'],
    Y: settings.color['Y'],
    W: 0xFFFFFF
}

let grid = [
    [ 'R0', 'R0', 'R0', 'R0', 'R0', 'R0', 'W1', 'W1', 'W1', 'G0', 'G0', 'G0', 'G0', 'G0', 'G0' ],
    [ 'R0', 'RS', 'I_', 'RS', 'I_', 'R0', 'W1', 'G1', 'G1', 'G0', 'GS', 'I_', 'GS', 'I_', 'G0' ],
    [ 'R0', 'I_', 'I_', 'I_', 'I_', 'R0', 'WS', 'G1', 'W1', 'G0', 'I_', 'I_', 'I_', 'I_', 'G0' ],
    [ 'R0', 'RS', 'I_', 'RS', 'I_', 'R0', 'W1', 'G1', 'W1', 'G0', 'GS', 'I_', 'GS', 'I_', 'G0' ],
    [ 'R0', 'I_', 'I_', 'I_', 'I_', 'R0', 'W1', 'G1', 'W1', 'G0', 'I_', 'I_', 'I_', 'I_', 'G0' ],
    [ 'R0', 'R0', 'R0', 'R0', 'R0', 'R0', 'W1', 'G1', 'W1', 'G0', 'G0', 'G0', 'G0', 'G0', 'G0' ],
    [ 'W1', 'R1', 'W1', 'W1', 'W1', 'W1', 'I_', 'GE', 'I_', 'W1', 'W1', 'W1', 'WS', 'W1', 'W1' ],
    [ 'W1', 'R1', 'R1', 'R1', 'R1', 'R1', 'RE', 'I_', 'YE', 'Y1', 'Y1', 'Y1', 'Y1', 'Y1', 'W1' ],
    [ 'W1', 'W1', 'WS', 'W1', 'W1', 'W1', 'I_', 'BE', 'I_', 'W1', 'W1', 'W1', 'W1', 'Y1', 'W1' ],
    [ 'B0', 'B0', 'B0', 'B0', 'B0', 'B0', 'W1', 'B1', 'W1', 'Y0', 'Y0', 'Y0', 'Y0', 'Y0', 'Y0' ],
    [ 'B0', 'BS', 'I_', 'BS', 'I_', 'B0', 'W1', 'B1', 'W1', 'Y0', 'YS', 'I_', 'YS', 'I_', 'Y0' ],
    [ 'B0', 'I_', 'I_', 'I_', 'I_', 'B0', 'W1', 'B1', 'W1', 'Y0', 'I_', 'I_', 'I_', 'I_', 'Y0' ],
    [ 'B0', 'BS', 'I_', 'BS', 'I_', 'B0', 'W1', 'B1', 'WS', 'Y0', 'YS', 'I_', 'YS', 'I_', 'Y0' ],
    [ 'B0', 'I_', 'I_', 'I_', 'I_', 'B0', 'B1', 'B1', 'W1', 'Y0', 'I_', 'I_', 'I_', 'I_', 'Y0' ],
    [ 'B0', 'B0', 'B0', 'B0', 'B0', 'B0', 'W1', 'W1', 'W1', 'Y0', 'Y0', 'Y0', 'Y0', 'Y0', 'Y0' ],
];

var paths = {
    R: [
        [1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
        [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],
        [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],
        [6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],
        [1,7],[2,7],[3,7],[4,7],[5,7],[6,7]
    ],
    G: [
        [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],
        [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],
        [6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6],
        [1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],
        [7,1],[7,2],[7,3],[7,4],[7,5],[7,6]
    ],
    Y: [
        [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],
        [6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6],
        [1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
        [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],
        [13,7],[12,7],[11,7],[10,7],[9,7],[8,7]
    ],
    B: [
        [6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6],
        [1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
        [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],
        [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],
        [7,13],[7,12],[7,11],[7,10],[7,9],[7,8]
    ],
};

var spawn = {
    R: [[1.5,1.5],[3.5,1.5],[1.5,3.5],[3.5,3.5]],
    G: [[10.5,1.5],[12.5,1.5],[10.5,3.5],[12.5,3.5]],
    Y: [[10.5,10.5],[12.5,10.5],[10.5,12.5],[12.5,12.5]],
    B: [[1.5,10.5],[3.5,10.5],[1.5,12.5],[3.5,12.5]],
};

var dicesPos = {
    R: [1, -2],
    G: [13, -2],
    Y: [13, 16],
    B: [1, 16]
};

let end = {
    R: [[0,-1], [1.5,0.5], [0,2]],
    G: [[-1,0], [2,0], [0.5,1.5]],
    Y: [[1,-1], [1,2], [-0.5,0.5]],
    B: [[-1,1], [0.5,-0.5], [2,1]]
};

let star = [
    [0.5, 0.0],
    [0.65, 0.35],
    [1.0, 0.35],
    [0.7, 0.55],
    [0.9, 1.0],
    [0.5, 0.7],
    [0.1, 1.0],
    [0.3, 0.55],
    [0.0, 0.35],
    [0.35, 0.35],
    [0.5, 0.0],
];

function draw(x, y, str) {
    if (str[0] == 'I') return;

    if (str == 'WS') {
        drawWS(x, y);
    } else if (str[1] == 'S') {
        drawStart(x, y, fill[str[0]]);
    } else if (str[1] == 'E') {
        drawEnd(x, y, fill[str[0]], end[str[0]]);
    } else {
        let hasBorder = str[1] == '1';
        board.lineStyle(hasBorder ? 1 : 0, 0, 1);
        board.beginFill(fill[str[0]]);
        board.drawRect(x, y, u, u);
        board.endFill();
    }
}

function drawWS(x, y) {
    board.lineStyle(1, 0, 1);
    board.beginFill(fill['W']);
    board.drawRect(x, y, u, u);
    board.endFill();

    board.lineStyle(1, 0, 1);
    board.moveTo(x + u*star[0][0], y + u*star[0][1]);
    for (var i = 1; i < star.length; i++)
        board.lineTo(x + u*star[i][0], y + u*star[i][1]);
}

function drawStart(x, y, c) {
    board.lineStyle(0, 0, 1);
    board.beginFill(0xFFFFFF);
    board.drawRect(x, y, 2*u, 2*u);
    board.endFill();

    board.beginFill(c);
    board.drawCircle(x+u, y+u, u/2);
    board.endFill();
}

function drawEnd(x, y, c, p) {
    board.beginFill(c);
    let path = [];
    for (var i = 0; i < p.length; i++) {
        path.push(x+u*p[i][0]);
        path.push(y+u*p[i][1]);
    }
    board.drawPolygon(path);
    board.endFill();
}


for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
        draw(j*u, i*u, grid[i][j]);
    }    
}


function makePawn(c, i) {
    var p = new Graphics();
    p.lineStyle(4,0xFFFFFF,1);
    p.beginFill(fill[c]);
    p.drawCircle(u/2, u/2, u*0.4);
    p.endFill();
    p.interactive = true;
    p.on('pointerdown', () => movePawn(c, i));
    return p;
}

var pawns = {
    R: [ makePawn('R', 0), makePawn('R', 1), makePawn('R', 2), makePawn('R', 3) ],
    G: [ makePawn('G', 0), makePawn('G', 1), makePawn('G', 2), makePawn('G', 3) ],
    Y: [ makePawn('Y', 0), makePawn('Y', 1), makePawn('Y', 2), makePawn('Y', 3) ],
    B: [ makePawn('B', 0), makePawn('B', 1), makePawn('B', 2), makePawn('B', 3) ],
};

function diceBackground(c) {
    var g = new Graphics();
    g.beginFill(c);
    g.drawRect(0, 0, 1.4*settings.size, 1.4*settings.size);
    g.endFill();
    g.position.x = -0.2*settings.size;
    g.position.y = -0.2*settings.size;
    return g;
}

let dicePoints = [
    [],
    [[0.5, 0.5]],
    [[0.2, 0.2], [0.8, 0.8]],
    [[0.2, 0.2], [0.8, 0.8], [0.5, 0.5]],
    [[0.2, 0.2], [0.8, 0.8], [0.2, 0.8], [0.8, 0.2]],
    [[0.2, 0.2], [0.8, 0.8], [0.2, 0.8], [0.8, 0.2], [0.5, 0.5]],
    [[0.2, 0.2], [0.8, 0.8], [0.2, 0.8], [0.8, 0.2], [0.2, 0.5], [0.8, 0.5]]
];

function drawValue(v) {
    var g = new Graphics();
    g.beginFill(0xFFFFFF);
    g.drawRoundedRect(0, 0, settings.size, settings.size, 0.1*settings.size);
    g.endFill();
    for (var i = 0; i < dicePoints[v].length; i++) {
        var p = dicePoints[v][i];
        g.beginFill(0);
        g.drawCircle(p[0]*settings.size, p[1]*settings.size, 0.1*settings.size);
        g.endFill();
    }
    g.visible = false;
    return g;
}

var Dice = function(c) {
    this.view = new Container();
    this.view.interactive = true;
    this.view.on('pointerdown', () => rollDice(c));
    this.view.addChild(diceBackground(fill[c]));
    this.values = [
        drawValue(0),
        drawValue(1),
        drawValue(2),
        drawValue(3),
        drawValue(4),
        drawValue(5),
        drawValue(6),
    ];
    for (var i = 0; i <= 6; i++)
        this.view.addChild(this.values[i]);
};

Dice.prototype.setValue = function(value) {
    for (var i = 0; i <= 6; i++)
        this.values[i].visible = i == value;
};

var dices = {};
for (var key in dicesPos) {
    dices[key] = new Dice(key);
}