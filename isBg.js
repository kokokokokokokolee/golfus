
var bgColor = document.querySelector('#wrap')
var headerColor = document.querySelector('#header')
var reserveColor = document.querySelector('#reserve')


document.addEventListener("scroll", ()=>{
const screenY = window.scrollY;



if (screenY >=1492 && 2124 >= screenY) {
        bgColor.classList.add("gray");
        bgColor.classList.remove("black");
        headerColor.classList.remove("black");
    }
    else if (screenY > 2124) {
        bgColor.classList.add("black");
        bgColor.classList.remove("gray");
        headerColor.classList.add("black");
        reserveColor.classList.add("black");
        reserveColor.classList.remove("white");
    }
    else {
        bgColor.classList.remove("gray");
        bgColor.classList.remove("black");
        headerColor.classList.remove("black");
        reserveColor.classList.remove("black");
        reserveColor.classList.add("white");
    }
})
