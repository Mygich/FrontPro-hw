let images = ["./image/img.png", "./image/img_1.png", "./image/img_2.png", "./image/img_3.png", "./image/img_4.png", "./image/img_5.png", "./image/img_6.png", "./image/img_7.png", "./image/img_8.png", "./image/img_9.png"];
let current = 0;

function showNextImage() {
    current++;
    if (current >= images.length) {
        current = 0;
    }
    document.getElementById("slider").children[0].src = images[current];
}

function showPrevImage() {
    current--;
    if (current < 0) {
        current = images.length - 1;
    }
    document.getElementById("slider").children[0].src = images[current];
}