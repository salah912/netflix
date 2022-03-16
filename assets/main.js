function(caroussel, rightArrow){
    const scroll = document.querySelector(caroussel);

    const right = document.querySelector(rightArrow);

    right.addEventListener("click", () =>{
        scroll.scrollLeft += scroll.offsetWidth;
    })
}