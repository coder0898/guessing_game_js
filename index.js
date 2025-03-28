const InputGuess = document.getElementById("inputGuess");
const AttemptVal = document.getElementById("attemptVal");
const SubmitGuess = document.getElementById("submitGuess");

const PopUpModal = document.getElementById("popUpModal");
const IconPara = document.getElementById("icon-para");
const ModalMessage = document.getElementById("modalMessage");
const CloseBtn = document.getElementById("closeBtn");
const RestartBtn = document.getElementById("restartBtn");

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
        PopUpModal.style.display = "flex";
        IconPara.innerHTML = '<i class="fa-solid fa-gauge-simple-high"></i>';
        IconPara.style.color = "#d9534f";
        ModalMessage.innerHTML = "Too High Value";
        ModalMessage.style.color = "#d9534f";
        InputGuess.value = "";
        AttemptVal.innerText = attempts;
      } else if (inputVal < secretNumber) {
        attempts++;
        PopUpModal.style.display = "flex";
        IconPara.innerHTML = '<i class="fa-solid fa-temperature-low"></i>';
        IconPara.style.color = "#1E90FF";
        ModalMessage.innerHTML = "Too Low Value";
        ModalMessage.style.color = "#1E90FF";
        InputGuess.value = "";
        AttemptVal.innerText = attempts;
      } else {
        attempts++;
        PopUpModal.style.display = "flex";
        IconPara.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        IconPara.style.color = "#FACA16";
        ModalMessage.innerHTML = `You guess correct number, that is ${secretNumber} in ${attempts}/${totalAttempts}`;
        ModalMessage.style.color = "#FACA16";
        InputGuess.value = "";
        AttemptVal.innerText = attempts;
      }

      if (attempts >= totalAttempts) {
        if (inputVal == secretNumber) {
          return;
        } else {
          PopUpModal.style.display = "flex";
          IconPara.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
          IconPara.style.color = "#1E90FF";
          ModalMessage.innerHTML = `Game over! You've reached the maximum number of attempts. The number was ${secretNumber}.`;
          ModalMessage.style.color = "#1E90FF";
          InputGuess.value = "";
          AttemptVal.value = 0;
        }
      }
    }
  }
}

SubmitGuess.addEventListener("click", () => {
  CheckGuess();
});

// popup
CloseBtn.addEventListener("click", () => {
  PopUpModal.style.display = "none";
});

RestartBtn.addEventListener("click", () => {
  PopUpModal.style.display = "none";
  InputGuess.value = "";
  AttemptVal.innerText = 0;
});
