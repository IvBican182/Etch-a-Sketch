document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);
    
    const select = document.querySelector("#popup");
    
    select.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);

    })
    

})

function createBoard (size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.appendChild(div);
    }
}

function getSize () {
    let input = prompt("Choose the size: ");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "plesase provide a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "please provide a number between 0 and 100";
    }
    else {
        message.innerHTML = "Let's play !";
        return input;
    }
}



