const imageArray = [
    "./images/img.png",
    "./images/img_1.png",
    "./images/img_2.png",
    "./images/img_3.png",
    "./images/img_4.png",
    "./images/img_5.png",
    "./images/img_6.png",
    "./images/img_7.png",
    "./images/img_8.png",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[randomNum]);
}