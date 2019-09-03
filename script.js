let img = document.getElementById('header-img')
let leftBar = document.getElementById('left-bar-js');
let ul = document.getElementById('left-bar-js-ul');
if(window.innerWidth<750){
img.style.display = 'block';
img.innerHTML = "";
img.src = "img/header-image.png";
img.addEventListener("click", navClick);
function navClick(){
leftBar.style.display = 'block';
}
}
ul.addEventListener("click", close);
function close(){
leftBar.style.display = 'none';
}
// Кнопка to top
var btn = document.getElementById('btn');
console.log(btn);
window.onscroll = function () {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    };
};
btn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
