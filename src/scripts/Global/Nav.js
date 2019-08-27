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

            const NavProjectsList = document.getElementById('Nav-Projects-List');
            const NavProjectsLink1 = document.getElementById('Nav-Projects-Link1')
            const NavProjectsLink2 = document.getElementById('Nav-Projects-Link2')
            const NavProjectsLink3 = document.getElementById('Nav-Projects-Link3')
            const NavProjectsLink4 = document.getElementById('Nav-Projects-Link4')
            const NavProjectsLink5 = document.getElementById('Nav-Projects-Link5')

            const MenuIcon = document.getElementById('Menu-Icon-Wrap');
            const MenuIconBar1 = document.getElementById('Menu-Icon-Bar1');
            const MenuIconBar2 = document.getElementById('Menu-Icon-Bar2')

        //Variables -------- ------ ---- -- -

        //Animate Nav Timeline -- -- -- -- 
            const NavAnimation = new TimelineMax();
                NavAnimation 
                    .add('wave1')
                        .to(MenuIconBar1, .4, {
                            top: '50%', 
                            ease: Expo.easeIn}, 'wave1')
                        .to(MenuIconBar2, .4, {
                            top: '50%', 
                            ease: Expo.easeIn}, 'wave1')

                        .to(Nav, .01, {
                            display: 'block'}, 'wave1')
                        .to(NavExit, .5, {
                            opacity: 1, 
                            ease: Power0.easeIn, 
                            delay: .1}, 'wave1')
                        .to(Nav, .6, {
                            opacity: 1, 
                            ease: Power0.easeIn}, 'wave1')

                        .to(NavDivideLine, .6, {
                            opacity: 1, 
                            ease: Power0.easeIn}, )
                        .to(NavDivideLine, .16, {
                            top: 0, 
                            ease: Power0.easeIn}, '-=.5')
                    
                        .to(NavList, .6, {
                            opacity: 1, 
                            ease: Power0.easeIn}, '-=.5')
                        .to(NavInfo, .6, {
                            opacity: 1, 
                            ease: Power0.easeIn}, '-=.5')
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







        //Animate Projects Menu Timeline -- -- -- -- 
            const ProjectsAnimation = new TimelineMax();
                ProjectsAnimation
                    .to(NavList, .6, {
                        opacity: 0, 
                        ease: Power0.easeIn, 
                        delay: .3})
                    .to(NavList, .01, {display: 'none'})
                    .to(NavProjectsList, .01, {display: 'block', delay: .4})
                    .fromTo(NavProjectsLink1, .5, 
                        {y: 20, ease: Power0.easeIn}, 
                        {y: 0, opacity: 1, ease: Power0.easeIn})
                    .fromTo(NavProjectsLink2, .5, 
                        {y: 20, ease: Power0.easeIn}, 
                        {y: 0, opacity: 1, ease: Power0.easeIn}, '-=.45')
                    .fromTo(NavProjectsLink3, .5, 
                        {y: 20, ease: Power0.easeIn}, 
                        {y: 0, opacity: 1, ease: Power0.easeIn}, '-=.45')
                    .fromTo(NavProjectsLink4, .5, 
                        {y: 20, ease: Power0.easeIn}, 
                        {y: 0, opacity: 1, ease: Power0.easeIn}, '-=.45')
                    .fromTo(NavProjectsLink5, .5, 
                        {y: 20, ease: Power0.easeIn}, 
                        {y: 0, opacity: 1, ease: Power0.easeIn}, '-=.45')
                    

                ;
                ProjectsAnimation.pause();


            //Function
                const AnimateProjectIn = (e) => {
                    ProjectsAnimation.play();
                }
                const AnimateProjectOut = (e) => {
                    ProjectsAnimation.reverse();
                }

            //Listeners
                NavLink3.addEventListener('click', AnimateProjectIn);


}());