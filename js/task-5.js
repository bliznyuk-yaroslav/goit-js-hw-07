function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const  body = document.querySelector("body");
const nameColor = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");

function clickButton(event){
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameColor.textContent = color;

}
changeButton.addEventListener("click", clickButton);