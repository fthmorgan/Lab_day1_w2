let home = 0
let away = 0

function homePlus1() {
  let scoreHome = document.getElementById('scoreHome');
  home++;
  scoreHome.innerHTML = home;
}

function awayPlus1() {
  let scoreAway = document.getElementById('scoreAway');
  away++;
  scoreAway.innerHTML = away;
}

function homePlus3() {
  let scoreHome = document.getElementById('scoreHome');
  home += 3;
  scoreHome.innerHTML = home;
}

function awayPlus3() {
  let scoreAway = document.getElementById('scoreAway');
  away += 3;
  scoreAway.innerHTML = away;
}

function resetButton() {

  let scoreAway = document.getElementById('scoreAway');
  away = 0;
  scoreAway.innerHTML = away;
}

function resetButton() {
  let scoreHome = document.getElementById('scoreHome')
  home = 0;
  scoreHome.innerHTML = home;
}