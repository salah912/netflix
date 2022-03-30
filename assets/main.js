
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
        
         var internationalImg = new Array(
            "assets/img/movie/3_.png",
            "assets/img/movie/aliceinborderland.png",
            "assets/img/movie/alrawabischoolforgirls.png",
            "assets/img/movie/annewithane.png",
            "assets/img/movie/behindhereyes.png",
            "assets/img/movie/bridgerton.png",
            "assets/img/movie/blackmirror.png",
            "assets/img/movie/blackpink.png",
            "assets/img/movie/caliphate.png",
            "assets/img/movie/dark.png",
            "assets/img/movie/elchapo.png",
            "assets/img/movie/enolaholmes.png",
            "assets/img/movie/girlfromnowhere.png",
            "assets/img/movie/hoteldelluna.png",
            "assets/img/movie/lupin.png",
            "assets/img/movie/moneyheist.png",
            "assets/img/movie/myname.png",
            "assets/img/movie/narcos.png",
            "assets/img/movie/narcosmexico.png",
            "assets/img/movie/peakyblinders.png",
            "assets/img/movie/squidgame.png",
            "assets/img/movie/sweettooth.png",
            "assets/img/movie/thecrown.png",
            "assets/img/movie/theendofthefuckingworld.png",
            "assets/img/movie/thehookupplan.png",
            "assets/img/movie/therain.png",
            "assets/img/movie/thewitcher.png",
            "assets/img/movie/theuncannycounter.png",
            "assets/img/movie/unorthodox.png",
            "assets/img/movie/vikings.png",
            "assets/img/movie/warriornun.png",
            "assets/img/movie/whenheroesfly.png",
          );
        
          var actionImg = new Array(
            "assets/img/movie/3_.png",
            "assets/img/movie/6underground.png",
            "assets/img/movie/aliceinborderland.png",
            "assets/img/movie/allofusaredead.png",
            "assets/img/movie/arcane.png",
            "assets/img/movie/attackontitan.png",
            "assets/img/movie/baki.png",
            "assets/img/movie/bleach.png",
            "assets/img/movie/breakingbad.png",
            "assets/img/movie/demonslayer.png",
            "assets/img/movie/elchapo.png",
            "assets/img/movie/enolaholmes.png",
            "assets/img/movie/hunterxhunter.png",
            "assets/img/movie/moneyheist.png",
            "assets/img/movie/mrrobot.png",
            "assets/img/movie/lovedeathrobot.png",
            "assets/img/movie/lupin.png",
            "assets/img/movie/mosul.png",
            "assets/img/movie/narcos.png",
            "assets/img/movie/narcosmexico.png",
            "assets/img/movie/outlander.png",
            "assets/img/movie/peakyblinders.png",
            "assets/img/movie/rednotice.png",
            "assets/img/movie/snowpiercer.png",
            "assets/img/movie/titans.png",
            "assets/img/movie/the100.png",
            "assets/img/movie/theoldguard.png",
            "assets/img/movie/theumbrellaacademy.png",
            "assets/img/movie/theuncannycounter.png",
            "assets/img/movie/thewalkingdead.png",
            "assets/img/movie/thewitcher.png",
            "assets/img/movie/thievesofthewood.png",
            "assets/img/movie/tribesofeuropa.png",
            "assets/img/movie/vikings.png",
          );
        
        var comedyImg = new Array(
            "assets/img/movie/atypical.png",
            "assets/img/movie/backto15.png",
            "assets/img/movie/bojackhorseman.png",
            "assets/img/movie/cobrakai.png",
            "assets/img/movie/disenchantment.png",
            "assets/img/movie/dontlookup.png",
            "assets/img/movie/emilyinparis.png",
            "assets/img/movie/glow.png",
            "assets/img/movie/gossipgirl.png",
            "assets/img/movie/hoteldelluna.png",
            "assets/img/movie/insatiable.png",
            "assets/img/movie/lovealarm.png",
            "assets/img/movie/neverhaveiever.png",
            "assets/img/movie/orangeisthenewblack.png",
            "assets/img/movie/ourbelovedsummer.png",
            "assets/img/movie/prisonschool.png",
            "assets/img/movie/rickandmorty.png",
            "assets/img/movie/saikik.png",
            "assets/img/movie/sexeducation.png",
            "assets/img/movie/shewaspretty.png",
            "assets/img/movie/tallgirl2.png",
            "assets/img/movie/theendofthefuckingworld.png",
        
          );
        
         var animeImg = new Array(
            "assets/img/movie/assassinationclassroom.png",
            "assets/img/movie/attackontitan.png",
            "assets/img/movie/awhiskeraway.png",
            "assets/img/movie/baki.png",
            "assets/img/movie/beastars.png",
            "assets/img/movie/bleach.png",
            "assets/img/movie/blueperiod.png",
            "assets/img/movie/demonslayer.png",
            "assets/img/movie/devilmancrybaby.png",
            "assets/img/movie/erased.png",
            "assets/img/movie/fatestaynight.png",
            "assets/img/movie/fromuponpoppyhill.png",
            "assets/img/movie/fullmetalalchemist.png",
            "assets/img/movie/gate.png",
            "assets/img/movie/graveofthefireflies.png",
            "assets/img/movie/greatpretender.png",
            "assets/img/movie/hunterxhunter.png",
            "assets/img/movie/japansinks2020.png",
            "assets/img/movie/jojosbizarreadventure.png",
            "assets/img/movie/kakegurui.png",
            "assets/img/movie/yourname.png",
            "assets/img/movie/myheroacademia.png",
            "assets/img/movie/myneighbortotoro.png",
            "assets/img/movie/naruto.png",
            "assets/img/movie/narutothelast.png",
            "assets/img/movie/nogamenolife.png",
            "assets/img/movie/onepunchman.png",
            "assets/img/movie/prisonschool.png",
            "assets/img/movie/princesssarah.png",
            "assets/img/movie/saikik.png",
            "assets/img/movie/samuraichamploo.png",
            "assets/img/movie/seraphoftheend.png",
            "assets/img/movie/steinsgate.png",
            "assets/img/movie/thewayofthehousehusband.png",
            "assets/img/movie/yasuke.png",
        
          );
        
          window.onload = randomImg;