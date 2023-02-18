let homeScr = document.getElementById("home-scr")
let guestScr = document.getElementById("guest-scr")
let guestCount = 0
let homeCount = 0

//home score

function homeAdd1() {
  homeCount += 1
  homeScr.textContent = homeCount
}

function homeAdd2() {
  homeCount += 2
  homeScr.textContent = homeCount
}

function homeAdd3() {
  homeCount += 3
  homeScr.textContent = homeCount
}


//guest score

function guestAdd1() {
  guestCount += 1
  guestScr.textContent = guestCount
}

function guestAdd2() {
  guestCount += 2
  guestScr.textContent = guestCount
}

function guestAdd3() {
  guestCount += 3
  guestScr.textContent = guestCount
}