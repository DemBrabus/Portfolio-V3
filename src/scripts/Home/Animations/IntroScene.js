
import { TweenMax, TimelineMax, Power1, CustomEase, Power2, Expo } from 'gsap/all';



//Wrap
(function(){


    //Variables ---------------------------------
        const Body = document.getElementById('Body');
        const LandingIntro = document.getElementById('Landing-Intro');

        const SlideLeft = document.getElementById('Landing-IntroSlideLeft');
        const SlideRight = document.getElementById('Landing-IntroSlideRight');
        const GroundZero = document.getElementById('GroundZero');
        const ScrollBar = document.getElementById('ScrollBar');
        





    //Scenes ----------------------------------
        
        const LandingInScene = new TimelineMax();
            LandingInScene
                .add('wave1')
                    .to(SlideLeft, 1.2, {left: 0, ease: Expo.easeInOut, delay: .5}, 'wave1')
                    .to(SlideRight, 1.2, {right: 0, ease: Expo.easeInOut, delay: .5}, 'wave1')

                    .to(GroundZero, .01, {opacity: 1, delay: .2})
                    .to(ScrollBar, .01, {opacity: 1}, '-=.5')
                    .to(Body, .01, {overflowY: 'scroll'})
                .add('wave2')
                    .to(SlideLeft, 1.2, {left: '-100%', ease: Expo.easeInOut, delay: .4}, 'wave2')
                    .to(SlideRight, 1.2, {right: '-100%', ease: Expo.easeInOut, delay: .4}, 'wave2')
                    .to(LandingIntro, .01, {display: 'none'})

                    
            ;   





    


}());