const InputGuess = document.getElementById("inputGuess");
const AttemptVal = document.getElementById("attemptVal");
const MessageString = document.getElementById("message");
const SubmitGuess = document.getElementById("submitGuess");

let secretNumber;
let attempts = 0,
  totalAttempts = 5;

secretNumber = Math.floor(Math.random() * 100) + 1;

function CheckGuess() {
  let inputVal = InputGuess.value;

  if (isNaN(inputVal) || inputVal == "" || inputVal < 0) {
    alert("Please enter valid input");
    InputGuess.value = "";
  } else {
    if (attempts == totalAttempts) {
      alert(
        `The guess number is ${secretNumber}, you unable to find in 5 attempts`
      );
      InputGuess.value = "";
    } else {
      if (inputVal > secretNumber) {
        attempts++;
        MessageString.innerHTML = "too high";
        InputGuess.value = "";
        AttemptVal.innerText = attempts;
      } else if (inputVal < secretNumber) {
        attempts++;
        MessageString.innerHTML = "too low";
        InputGuess.value = "";
        AttemptVal.innerText = attempts;
      } else {
        attempts++;
        alert(
          `You guess correct number, that is ${secretNumber} in ${attempts}/${totalAttempts}`
        );
        InputGuess.value = "";
        MessageString.innerHTML = "";
        AttemptVal.innerText = attempts;
      }

      if (attempts >= totalAttempts) {
        if (inputVal == secretNumber) {
          return;
        } else {
          alert(
            `Game over! You've reached the maximum number of attempts. The number was ${secretNumber}.`
          );
          InputGuess.value = "";
          MessageString.innerHTML = "";
        }
      }
    }
    // console.log(secretNumber);
  }
}

SubmitGuess.addEventListener("click", () => {
  CheckGuess();
});
