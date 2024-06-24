var imgs = document.querySelectorAll('#slider img');
var currentImg = 0;
var preImg = imgs.length - 1;
var nextImg = currentImg + 1;

function slide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style = "visibility:hidden;";
    }

    if (n == 0) currentImg--;
    else if (n == 1) currentImg++;

    currentImg = currentImg < 0 ? (imgs.length - 1) : (currentImg % imgs.length);
    preImg = (currentImg == 0) ? (imgs.length - 1) : (currentImg - 1);
    nextImg = (currentImg + 1) % imgs.length;

    imgs[currentImg].style = "visibility:visible;";
    imgs[preImg].style = "transform: translateX(-100%);";
    imgs[nextImg].style = "transform: translateX(100%);";
}
window.onload = function() {
    slide();
}

setInterval(() => {
    slide(1);
}, 3000);