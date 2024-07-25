let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");


function resetHome() {
    homeEl.textContent = 0;
}

function resetGuest() {
    guestEl.textContent = 0;
}

function addOne() {
    homeEl.textContent = parseInt(homeEl.textContent) + 1;
}

function addTwo() {
    let result = parseInt(homeEl.textContent);
    result += 2;
    homeEl.textContent = result;
}

function addThree() {
    let result = parseInt(homeEl.textContent);
    result += 3;
    homeEl.textContent = result;   
}
function addOneG() {
    guestEl.textContent = parseInt(guestEl.textContent) + 1;
}

function addTwoG() {
    let result = parseInt(guestEl.textContent);
    result += 2;
    guestEl.textContent = result;
}

function addThreeG() {
    let result = parseInt(guestEl.textContent);
    result += 3;
    guestEl.textContent = result;  
}
