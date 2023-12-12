var bgColor = document.querySelector('#wrap')
var headerColor = document.querySelector('#header')
var reserveColor = document.querySelector('#reserve')


document.addEventListener("scroll", ()=>{
    const screenY = window.scrollY;

    console.log(screenY);
    // bgColor.style.backgroundColor = '#fff'
    // // if(screenY >=1492 && 2124 <= screenY){
    // //     bgColor.style.backgroundColor = `#f5f6f9`;
    // //     // bgColor.style.transition = `all 0.3s ease-in-out`
    // //     }
    //  if (screenY > 2124){
    //     bgColor.style.backgroundColor = `#000`;
        // bgColor.style.transition = `all 0.3s ease-in-out`


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

    //1641