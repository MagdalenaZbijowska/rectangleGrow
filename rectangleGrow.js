let size = 100;
let growRect = true;

document.body.style.height = "10000px";
const rectangle = document.createElement('div');
document.body.appendChild(rectangle);

rectangle.style.position = "fixed";
rectangle.style.left = 0;
rectangle.style.top = 0;
rectangle.style.width = "100%";
rectangle.style.height = size + "px";
rectangle.style.backgroundColor = "yellowgreen";

const changeHeight = function () {
    if (size >= window.innerHeight / 2) {
        growRect = !growRect;
        rectangle.style.backgroundColor = "royalblue";
    } else if (size <= 0) {
        growRect = !growRect;
        rectangle.style.backgroundColor = "yellowgreen";
    }
    if (growRect) {
        size += 5
    } else {
        size -= 5
    }
    rectangle.style.height = size + "px";
}

window.addEventListener("scroll", changeHeight)