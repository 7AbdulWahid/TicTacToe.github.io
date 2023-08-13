let box = document.querySelectorAll('.gamebox');
const cross = `<span class="material-symbols-outlined cross">close</span>`;
const circle = `<span class="material-symbols-outlined circle">circle</span>`;
let player = circle;
let isDraw = false;
let clickCount = 0;



// This function toggle the player
function togglePlayer() {
    player = (player === cross) ? circle : cross;
}

// This function change the player name on title
function changePlayerName() {
    let playerTurn = document.querySelector('#tpanal');
    playerTurn.innerHTML = `Player ${player} Turn`;
}

// This function will check if you win the game or not, or it is draw

function winCheck() {
    if (
        box[0].innerHTML !== '' &&
        box[0].innerHTML === box[1].innerHTML &&
        box[1].innerHTML === box[2].innerHTML
    ) { PlayerWin(); }
    else if (
        box[3].innerHTML !== '' &&
        box[3].innerHTML === box[4].innerHTML &&
        box[4].innerHTML === box[5].innerHTML
    ) { PlayerWin(); }
    else if (
        box[6].innerHTML !== '' &&
        box[6].innerHTML === box[7].innerHTML &&
        box[7].innerHTML === box[8].innerHTML
    ) { PlayerWin(); }
    else if (
        box[6].innerHTML !== '' &&
        box[6].innerHTML === box[7].innerHTML &&
        box[7].innerHTML === box[8].innerHTML
    ) { PlayerWin(); }
    else if (
        box[0].innerHTML !== '' &&
        box[0].innerHTML === box[3].innerHTML &&
        box[3].innerHTML === box[6].innerHTML
    ) { PlayerWin(); }
    else if (
        box[1].innerHTML !== '' &&
        box[1].innerHTML === box[4].innerHTML &&
        box[4].innerHTML === box[7].innerHTML
    ) { PlayerWin(); }
    else if (
        box[2].innerHTML !== '' &&
        box[2].innerHTML === box[5].innerHTML &&
        box[5].innerHTML === box[8].innerHTML
    ) { PlayerWin(); }
    else if (
        box[0].innerHTML !== '' &&
        box[0].innerHTML === box[4].innerHTML &&
        box[4].innerHTML === box[8].innerHTML
    ) { PlayerWin(); }
    else if (
        box[2].innerHTML !== '' &&
        box[2].innerHTML === box[4].innerHTML &&
        box[4].innerHTML === box[6].innerHTML
    ) { PlayerWin(); }
    else if (clickCount == 9) {
        isDraw = true;
        PlayerWin();
    }
};





function click() {
    box.forEach((gamebox) => {
        gamebox.addEventListener('click', () => {
            clickCount += 1;
            if (gamebox.innerHTML === '') {
                gamebox.innerHTML = player;
                winCheck();
                togglePlayer();
                changePlayerName();
            }
        });
    });
};

click();
