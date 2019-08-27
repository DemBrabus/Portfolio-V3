import { TimelineMax, Power0 } from 'gsap/all';

(function(){

//Nav Animation

    //GSAP ------------------- -------------------

        //Variables -------- ------ ---- -- -

            const Nav = document.getElementById('Nav');
            const NavExit = document.getElementById('Nav-Exit');
            const NavDivideLine = document.getElementById('Nav-Divide-Line');
            const NavList = document.getElementById('Nav-List')
            const NavLink1= document.getElementById('Nav-Link1');
            const NavLink2= document.getElementById('Nav-Link2');
            const NavLink3= document.getElementById('Nav-Link3');
            const NavLink4= document.getElementById('Nav-Link4');
            const NavInfo = document.getElementById('Nav-Info');

            const MenuIcon = document.getElementById('Menu-Icon-Wrap');
            const MenuIconBar1 = document.getElementById('Menu-Icon-Bar1');
            const MenuIconBar2 = document.getElementById('Menu-Icon-Bar2')

        //Variables -------- ------ ---- -- -

        //Timeline -- -- -- -- 
            const NavAnimation = new TimelineMax();
                NavAnimation 
                    .add('wave1')
                        .to(MenuIconBar1, .4, {
                            top: '50%', 
                            ease: Expo.easeIn}, 'wave1')
                        .to(MenuIconBar2, .4, {
                            top: '50%', 
                            ease: Expo.easeIn}, 'wave1')

                        .to(Nav, .01, {display: 'block'}, 'wave1')
                        .to(NavExit, .5, {opacity: 1, ease: Power0.easeIn, delay: .1}, 'wave1')
                        .to(Nav, .6, {
                            opacity: 1, 
                            ease: Power0.easeIn}, 'wave1')

                        .to(NavDivideLine, .6, {opacity: 1, ease: Power0.easeIn}, )
                        .to(NavDivideLine, .16, {top: 0, ease: Power0.easeIn}, '-=.5')
                        
                        
                        

                        
                        .to(NavList, .6, {opacity: 1, ease: Power0.easeIn}, '-=.5')
                        .to(NavInfo, .6, {opacity: 1, ease: Power0.easeIn}, '-=.5')
                ;
                
                NavAnimation.pause();



        //Function
            const AnimateNavIn = (e) => {
                NavAnimation.play();
            }
            const AnimateNavOut = (e) => {
                NavAnimation.reverse();
            }

        //Listeners
            //In
                MenuIcon.addEventListener('click', AnimateNavIn);
            //Out
                NavExit.addEventListener('click', AnimateNavOut);

}());