const buttons = document.querySelectorAll(".button");
const text = document.querySelector(".text");
const reset = document.querySelector(".reset");

const winType = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = true;

buttons.forEach((b) => {
  b.addEventListener("click", () => {
    if (turn) {
      b.innerHTML = "0";
      turn = false;
    } else {
      b.innerHTML = "X";
      turn = true;
    }
    b.disabled = true;
    winner();
  });
});

const winner = () => {
  for (let type of winType) {
    // console.log(type[0], type[1], type[2]);

    let patternOne = buttons[type[0]];
    let patternTwo = buttons[type[1]];
    let patternThree = buttons[type[2]];

    if (
      patternOne.innerHTML != "" &&
      patternTwo.innerHTML != "" &&
      patternThree.innerHTML != ""
    ) {
      if (
        patternOne.innerHTML == patternTwo.innerHTML &&
        patternTwo.innerHTML == patternThree.innerHTML
      ) {
        text.innerHTML = `Winner is ${patternOne.innerHTML}`;
        buttons.forEach((win) => {
          win.disabled = true;
        });
      }
    }
  }
};

reset.addEventListener("click", () => {
  //   window.location.reload();
  buttons.forEach((win) => {
    win.disabled = false;
    win.innerHTML = "";
    text.innerHTML = "";
  });
});
