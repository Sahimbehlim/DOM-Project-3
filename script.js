var cursor = document.querySelector('.cursor');
var main = document.querySelector('#main');
var text = document.querySelector('h1');

main.addEventListener('mousemove',(e) => {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})