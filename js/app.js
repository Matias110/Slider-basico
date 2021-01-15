var num = 1;
var photo = document.getElementById('photo');

function next() {
    num++;
    if (num > 3) num = 1;
    photo.src = `img/${num}.jpg`;
}

function previous() {
    num--;
    if (num < 1) num = 3;
    photo.src = `img/${num}.jpg`;
}