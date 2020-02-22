var board = new Graphics();

let u = settings.size;
let fill = {
    'R': 0xEB1C22,
    'B': 0x22A4F0,
    'G': 0x01A048,
    'Y': 0xFDDF14,
    'W': 0xFFFFFF
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

let end = {
    'R': [[0,-1], [1.5,0.5], [0,2]],
    'G': [[-1,0], [2,0], [0.5,1.5]],
    'Y': [[1,-1], [1,2], [-0.5,0.5]],
    'B': [[-1,1], [0.5,-0.5], [2,1]]
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