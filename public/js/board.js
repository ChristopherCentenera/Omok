function createBoard(squares, boardDiv){
    let board = document.getElementById("" + boardDiv);
    
    let height = board.getAttribute('height');
    let width = board.getAttribute('width')

    for(let i = 0; i < squares; i++) {
        for(let j = 0; j < squares; j++) {
            let styling = 'fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)';
            let boardTile = document.createElementNS('http://www.w3.org/2000/svg','rect');
            boardTile.setAttribute('width', (width/squares));
            boardTile.setAttribute('height', (height/squares));
            boardTile.setAttribute('style',styling);
            boardTile.setAttribute('x',i * (width/squares));
            boardTile.setAttribute('y',j * (height/squares));
            board.appendChild(boardTile);
        }
    }
}