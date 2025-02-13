const cells = document.querySelectorAll('.cells');
const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector('.btn'); 

// variables required = current player, grid board, wining position, init Column function
let currentPlayer;  // default value must be X
let gameGrid;   // default value must be empty at the starting of the game

const winingPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialise the game
function initGame(){
    currentPlayer = 'X';
    gameGrid = ['', '', '', '', '', '', '', '', ''];
    // UI pr bhi empty krna parega cells ko
    cells.forEach((cell, index) => {
        cell.innerText = '';
        cells[index].style.pointerEvents = 'all';
        cell.classList.remove('win');
    });


    newGameBtn.classList.remove('active');
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function checkGameOver() {
    let answer = '';

    // all 3 boxes should be non empty and should be equal
    winingPositions.forEach((position) => {
        if((gameGrid[position[0]] !== '' || gameGrid[position[1]] !== '' || gameGrid[position[2]] !== '') && ((gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]]))){
            // check if player X is winner
            if(gameGrid[position[0]] === 'X'){
                answer = 'X';
            }
            else {
                answer = 'O';
            }

            // disable for all pointers
            cells.forEach((cell) => {
                cell.style.pointerEvents = 'none';
            })
            // now we know X/O is winner
            cells[position[0]].classList.add('win');
            cells[position[1]].classList.add('win');
            cells[position[2]].classList.add('win');
        }
    });

    // when there is a sure winner
    if(answer !== ''){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add('active');
        return;
    }

    // when there is no winner
    let fillCount = 0;
    gameGrid.forEach((position) => {
        if(position !== ''){
            fillCount = fillCount+1;
        }
    })

    if(fillCount === 9){
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add('active');
        return;
    }
}

function swapTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }

    // Update UI
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function handleClick(index) {
    if(gameGrid[index] === ''){
        cells[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        cells[index].style.pointerEvents = 'none';
        // swap turn
        swapTurn();

        // check koi jeet to nhi gya
        checkGameOver();
    }
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        handleClick(index);
    })
})

newGameBtn.addEventListener('click', initGame);