import { TweenMax, TimelineMax, Power1, CustomEase, Power2, Expo } from 'gsap/all';



//Wrap
(function(){


    //Variables ---------------------------------
        const Body = document.getElementById('Body');
        const IntroWindow = document.getElementById('Intro-Window');
        const IntroText1 = document.getElementById('Intro-Text1');
        const IntroText2 = document.getElementById('Intro-Text2');
        const IntroText3 = document.getElementById('Intro-Text3');
        const DivideLine = document.getElementById('Intro-Divide-Line');
        const SlideLeft = document.getElementById('Intro-Slide-Left');
        const SlideRight = document.getElementById('Intro-Slide-Right');
        



    //Scenes ----------------------------------
        const IntroScene = new TimelineMax();
            IntroScene
            .add('wave0')
                .to(IntroText1, 1.2, {opacity: 1, ease: Power1.easeOut, delay: 1}, 'wave0')
                .to(IntroText2, 1.2, {opacity: 1, ease: Power1.easeOut, delay: 1}, 'wave0')
                .to(IntroText3, 1.2, {opacity: 1, ease: Power1.easeOut, delay: 1}, 'wave0')

                .to(IntroText1, .5, {opacity: 0, ease: Power1.easeOut, delay: 2})
                .to(IntroText2, .5, {opacity: 0, ease: Power1.easeOut,}, '-=.3')
                .to(IntroText3, .5, {opacity: 0, ease: Power1.easeOut,}, '-=.3')

                .to(DivideLine, .4, {
                    bottom: 0, 
                    ease: Expo.easeInOut.easeInOut,
                    delay: .6})
            .add('wave1')
                .to(SlideLeft, .9, {left: '-100%', ease: Expo.easeInOut}, 'wave1')
                .to(SlideRight, .9, {right: '-100%', ease: Expo.easeInOut}, 'wave1')
                .to(DivideLine, .4, {
                    display: 'none'}, '-=.9')
            ; 



}());