const USER_INPUT = document.querySelector("#userInput");
const CONSOLE_OUTPUT = document.querySelector("#consoleOutput")

document.addEventListener("keydown", (e) => {
if (e.key === "Enter") updateConsole(USER_INPUT.value);
});

function updateConsole(userInput) {
  const newUserInput = `<p>${userInput}</p>`;
  USER_INPUT.value = "";
  CONSOLE_OUTPUT.innerHTML = CONSOLE_OUTPUT.innerHTML + newUserInput;
}
