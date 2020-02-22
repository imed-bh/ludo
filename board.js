var board = new Graphics();

let u = 32;
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

function draw(x, y, str) {
    if (str[0] == 'I') return;

    board.beginFill(fill[str[0]]);
    board.drawRect(x, y, u, u);
    board.endFill();
}

for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
        draw(j*u, i*u, grid[i][j]);
    }    
}