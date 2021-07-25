function age_calculator() {
  var birthYear = prompt("Enter your BirthYear? ");
  let calculate_age = (2021 - birthYear) * 365;
  h1 = document.createElement("h1");
  var textNode = document.createTextNode(
    "Your age " + calculate_age + "day's old"
  );
  h1.setAttribute("id", "age-result");
  h1.appendChild(textNode);
  document.getElementById("flex-result-result").appendChild(h1);
}

function reset() {
  document.getElementById("age-result").remove();
}

//Generate Cate
function gen_cat() {
  image = document.createElement("img");
  image.src =
    "http://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
  image.alt = "no-image";
  document.getElementById("gen-cat-flex").appendChild(image);
}

//Rock, Paper , scissors

function rps_game(yourChoice) {
  var humanChoice = yourChoice.id;
  var botChoice = randomChoice(randomNumber());
  var result = winnerDecide(humanChoice, botChoice);
  var message = result_message(result);
  display_result(humanChoice, botChoice, message);
}
function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function randomChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
function winnerDecide(humanChoice, botChoice) {
  var rpsDatabase = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };

  var yourScore = rpsDatabase[humanChoice][botChoice];
  var botScore = rpsDatabase[botChoice][humanChoice];
  return [yourScore, botScore];
}
function result_message(result) {
  var message = {};
  if (result[0] === 1) {
    message = {
      message: "You Win",
      color: "green",
    };
  } else if (result[0] === 0) {
    message = {
      message: "You Lose",
      color: "red",
    };
  } else if (result[0] === 0.5) {
    message = {
      message: "You tie",
      color: "yellow",
    };
  }
  return message;
}

function display_result(humanChoice, botChoice, message) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
  var humanDiv = document.createElement("div");
  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37, 50, 233, 1);'>";

  botDiv = document.createElement("div");
  botDiv.innerHTML =
    "<img src='" +
    imageDatabase[botChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243, 38, 24, 1);'>";

  resultDiv = document.createElement("div");
  resultDiv.innerHTML =
    "<h1 style='color:" +
    message.color +
    "; font-size:80px; padding:30px'>" +
    message.message +
    "</h1>";
  document.getElementById("flex-rps-container-div").appendChild(humanDiv);
  document.getElementById("flex-rps-container-div").appendChild(resultDiv);
  document.getElementById("flex-rps-container-div").appendChild(botDiv);
  resetDiv = document.createElement("div");
  resetDiv.innerHTML =
    "<button class='btn btn-success' onClick='reset_rps_game()'>Play Again</button>";
  document.getElementById("flex-rps-container-div").appendChild(resetDiv);
}

function reset_rps_game() {
  document.getElementById("flex-rps-container-div").innerHTML = "";

  var imageDatabase = {
    rock: {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Logan_Rock_Treen_closeup.jpg",
      id: "rock",
    },
    paper: {
      img: "http://images.clipartpanda.com/paper-clip-art-niEBBqMiA.svg",
      id: "paper",
    },
    scissors: {
      img: "https://thumbs.dreamstime.com/z/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg",
      id: "scissors",
    },
  };

  image_set(imageDatabase["rock"]);
  image_set(imageDatabase["paper"]);
  image_set(imageDatabase["scissors"]);
}
function image_set(image_attribute) {
  var image = document.createElement("img");
  image.src = image_attribute["img"];
  image.height = "150";
  image.width = "150";
  image.alt = "no-image";
  image.setAttribute("id", image_attribute["id"]);
  image.setAttribute("onClick", "rps_game(this)");
  document.getElementById("flex-rps-container-div").appendChild(image);
}

//change button color

let copy_all_button_color = [];
let all_button_color = document.getElementsByTagName("button");

for (let i = 0; i < all_button_color.length; i++) {
  copy_all_button_color.push(all_button_color[i].classList[1]);
}
function btn_color_change_box(select_value) {
  if (select_value.value === "red") {
    red_color_change();
  } else if (select_value.value === "green") {
    green_color_change();
  } else if (select_value.value === "blue") {
    blue_color_change();
  } else if (select_value.value === "reset") {
    reset_color_change();
  } else if (select_value.value === "random") {
    random_color_change();
  }
}
function reset_color_change() {
  for (let i = 0; i < all_button_color.length; i++) {
    all_button_color[i].classList.remove(all_button_color[i].classList[1]);
    all_button_color[i].classList.add(copy_all_button_color[i]);
  }
}
function red_color_change() {
  for (let i = 0; i < all_button_color.length; i++) {
    all_button_color[i].classList.remove(all_button_color[i].classList[1]);
    all_button_color[i].classList.add("btn-danger");
  }
}
function blue_color_change() {
  for (let i = 0; i < all_button_color.length; i++) {
    all_button_color[i].classList.remove(all_button_color[i].classList[1]);
    all_button_color[i].classList.add("btn-primary");
  }
}
function green_color_change() {
  for (let i = 0; i < all_button_color.length; i++) {
    all_button_color[i].classList.remove(all_button_color[i].classList[1]);
    all_button_color[i].classList.add("btn-success");
  }
}
function random_color_change() {
  for (let i = 0; i < all_button_color.length; i++) {
    color_list = [
      "btn-primary",
      "btn-secondary",
      "btn-success",
      "btn-danger",
      "btn-warning",
      "btn-info",
      "btn-light",
    ];
    all_button_color[i].classList.remove(all_button_color[i].classList[1]);
    all_button_color[i].classList.add(color_list[randomNumber()]);
  }
}

//blackjack game

let blackjackGameDatabase = {
  your: {
    div: "#black-jack-your-box",
    scoreSpan: "#your-blackjack-result",
    score: 0,
  },
  dealer: {
    div: "#black-jack-dealer-box",
    scoreSpan: "#dealer-blackjack-result",
    score: 0,
  },
  cardNumber: [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ],
  cardValue: {
    A: [1, 11],
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
  },
  win: 0,
  loses: 0,
  draw: 0,
  isStand: false,
  turnOver: false,
};

const YOUR = blackjackGameDatabase["your"];
const DEALER = blackjackGameDatabase["dealer"];
const cardNumber = blackjackGameDatabase["cardNumber"];
const HitSound = new Audio("static/sounds/swish.m4a");
const WinSound = new Audio("static/sounds/cash.mp3");
const LoseSound = new Audio("static/sounds/aww.mp3");
document
  .querySelector("#blackjack-hit-btn")
  .addEventListener("click", blackjackHit);
document
  .querySelector("#blackjack-deal-btn")
  .addEventListener("click", blackjackDeal);
document
  .querySelector("#blackjack-stand-btn")
  .addEventListener("click", blackjackStand);

//All button
function blackjackHit() {
  if (blackjackGameDatabase["isStand"] === false) {
    card = choiceRandomCard();
    showCard(YOUR, card);
    updateScore(card, YOUR);
    showScore(YOUR);
  }
}
function blackjackDeal() {
  if (blackjackGameDatabase["turnOver"] === true) {
    blackjackGameDatabase["turnOver"] = false;
    blackjackGameDatabase["isStand"] = false;
    allImage = document.querySelector(YOUR["div"]).querySelectorAll("img");
    for (let i = 0; i < allImage.length; i++) {
      allImage[i].remove();
    }
    allImage = document.querySelector(DEALER["div"]).querySelectorAll("img");
    for (let i = 0; i < allImage.length; i++) {
      allImage[i].remove();
    }
    YOUR["score"] = 0;
    DEALER["score"] = 0;
    document.querySelector(YOUR["scoreSpan"]).textContent = 0;
    document.querySelector(DEALER["scoreSpan"]).textContent = 0;
    document.querySelector(YOUR["scoreSpan"]).style.color = "white";
    document.querySelector(DEALER["scoreSpan"]).style.color = "white";
    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "black";
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function blackjackStand() {
  blackjackGameDatabase["isStand"] = true;
  while (DEALER["score"] < 15 && blackjackGameDatabase["isStand"] === true) {
    card = choiceRandomCard();
    showCard(DEALER, card);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  blackjackGameDatabase["turnOver"] = true;
  winner = decidedWinnerBlackjackGame();
  showGameResult(winner);
}

function showCard(object, card) {
  if (object["score"] <= 21) {
    image = document.createElement("img");
    image.src = `static/images/${card}.png`;
    document.querySelector(object["div"]).appendChild(image);
    showScore(YOUR);
    HitSound.play();
  }
}
function choiceRandomCard() {
  randomNumber = Math.floor(Math.random() * 13);
  return cardNumber[randomNumber];
}
function updateScore(card, activeRole) {
  if (activeRole["score"] < 22) {
    if (card === "A") {
      if (
        activeRole["score"] + blackjackGameDatabase["cardValue"][card][1] <=
        21
      ) {
        activeRole["score"] += blackjackGameDatabase["cardValue"][card][1];
      } else {
        activeRole["score"] += blackjackGameDatabase["cardValue"][card][0];
      }
    } else {
      activeRole["score"] += blackjackGameDatabase["cardValue"][card];
    }
  }
}
function showScore(activeRole) {
  if (activeRole["score"] <= 21) {
    document.querySelector(activeRole["scoreSpan"]).textContent =
      activeRole["score"];
  } else {
    document.querySelector(activeRole["scoreSpan"]).textContent = "YOU BUST!!";
    document.querySelector(activeRole["scoreSpan"]).style.color = "red";
  }
}
function decidedWinnerBlackjackGame() {
  let winner;
  if (YOUR["score"] <= 21) {
    if (YOUR["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOUR;
      blackjackGameDatabase["win"]++;
    } else if (YOUR["score"] < DEALER["score"]) {
      winner = DEALER;
      blackjackGameDatabase["loses"]++;
    } else if (YOUR["score"] === DEALER["score"]) {
      blackjackGameDatabase["draw"]++;
    }
  } else if (YOUR["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
    blackjackGameDatabase["loses"]++;
  } else if (YOUR["score"] > 21 && DEALER["score"] > 21) {
    blackjackGameDatabase["draw"]++;
  }

  return winner;
}
function showGameResult(winner) {
  if (blackjackGameDatabase["turnOver"] === true) {
    let message, messageColor;
    if (winner === YOUR) {
      document.querySelector("#win").textContent = blackjackGameDatabase["win"];
      WinSound.play();
      message = "You Win!";
      messageColor = "green";
    } else if (winner === DEALER) {
      document.querySelector("#loses").textContent =
        blackjackGameDatabase["loses"];
      LoseSound.play();
      message = "You Loses!";
      messageColor = "red";
    } else {
      document.querySelector("#draws").textContent =
        blackjackGameDatabase["draw"];
      blackjackGameDatabase["draw"]++;
      message = "Match Draw!";
      messageColor = "yellow";
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}
