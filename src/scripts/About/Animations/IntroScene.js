
import { TweenMax, TimelineMax, Power1, CustomEase, Power2, Expo } from 'gsap/all';



//Wrap
(function(){


    //Variables ---------------------------------
        const Body = document.getElementById('Body');
        const AboutIntro = document.getElementById('About-Intro');

        const SlideLeft = document.getElementById('About-IntroSlideLeft');
        const SlideRight = document.getElementById('About-IntroSlideRight');
        const GroundZero = document.getElementById('GroundZero');
        const ScrollBar = document.getElementById('ScrollBar');
        





    //Scenes ----------------------------------
        
        const AboutInScene = new TimelineMax();
            AboutInScene
                .add('wave1')
                    .to(SlideLeft, 1.2, {left: 0, ease: Expo.easeInOut, delay: .5}, 'wave1')
                    .to(SlideRight, 1.2, {right: 0, ease: Expo.easeInOut, delay: .5}, 'wave1')

                    .to(GroundZero, .01, {opacity: 1, delay: .2})
                    .to(ScrollBar, .01, {opacity: 1}, '-=.5')
                    .to(Body, .01, {overflowY: 'scroll'})
                .add('wave2')
                    .to(SlideLeft, 1.2, {left: '-100%', ease: Expo.easeInOut, delay: .4}, 'wave2')
                    .to(SlideRight, 1.2, {right: '-100%', ease: Expo.easeInOut, delay: .4}, 'wave2')
                    .to(AboutIntro, .01, {display: 'none'})

                    
            ;   





    


}());