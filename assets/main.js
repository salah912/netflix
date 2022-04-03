
    // right event
    function rightScroll(carousel, rightArrow) {

        const scroll = document.querySelector(carousel);

        const right = document.querySelector(rightArrow);
        
        scroll.scrollLeft += scroll.offsetWidth;

    }

    // left event
    function leftScroll(carousel, leftArrow) {

        const scroll = document.querySelector(carousel);

        const left = document.querySelector(leftArrow);

        scroll.scrollLeft -= scroll.offsetWidth;
        

    }
    //navbar scroll
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 80)
        {
        document.getElementById("navbar").style.background = "black";
        }
        else
        {
        document.getElementById("navbar").style.background = "none";
        }
        } 

    function randomImg() {

        for (let i = 1; i < 30; i++) {
            // math.random = select a random value
            // math.floor = return the random value
            var internationalRandom = Math.floor(Math.random() * internationalImg.length);
            document.getElementById("international" + i.toString()).src = internationalImg[internationalRandom];
        
            var actionRandom = Math.floor(Math.random() * actionImg.length);
            document.getElementById("action" + i.toString()).src = actionImg[actionRandom];
      
            var comedyRandom = Math.floor(Math.random() * comedyImg.length);
            document.getElementById("comedy" + i.toString()).src = comedyImg[comedyRandom];
        
            var animeRandom = Math.floor(Math.random() * animeImg.length);
            document.getElementById("anime" + i.toString()).src = animeImg[animeRandom];
         }
        }
        
        function toggleSection(id) {

        let elmDisplay = document.getElementById(id)

        if( elmDisplay.style.display == "block") 
        {
          elmDisplay.style.display = "none"
        } 
               else 
        {
        elmDisplay.style.display = "block"
        }
        }