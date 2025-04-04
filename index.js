const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let titleEl = document.getElementById("title");
let subTitleEL = document.getElementById("sub-title");
let generatePasswordsEl = document.getElementById("generate-passwords");
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
passwordOneEl.textContent = "";

titleEl.innerHTML = `
<span class="one">Generate a</span><br>
<span class="two">random password</span>
`;

subTitleEL.textContent = "Never use an insecure password again.";
generatePasswordsEl.textContent = "Generate Passwords";

// Generate Password

function generatePassword(length = 15) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  // console.log(password)
  return password;
}

generatePasswordsEl.addEventListener("click", function () {
  passwordOneEl.textContent = "";
  passwordOneEl.textContent = generatePassword();
  passwordTwoEl.textContent = generatePassword();
});
