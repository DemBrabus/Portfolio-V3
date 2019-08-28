import { TweenMax, TimelineMax, Power1, CustomEase, Power2, Expo } from 'gsap/all';



//Wrap
(function(){

    const Body = document.getElementById('Body');
    const GroundZero = document.getElementById('GroundZero');
    
    const Nav = document.getElementById('Nav');
    const IntroSlide1 = document.getElementById('Project-Intro-Slide1');
    const IntroSlide2 = document.getElementById('Project-Intro-Slide2');
    const ProjectIntroWrap = document.getElementById('Projects-Intro-Wrap');



    const ProjectsIntroScene = new TimelineMax();
        ProjectsIntroScene 
            .add('wave1')
                .to(IntroSlide1, 1, {top: 0, ease:Expo.easeInOut, delay: .5},'wave1')
                .to(IntroSlide2, 1, {top: 0, ease:Expo.easeInOut, delay: .57},'wave1')

            .add('wave2')
            
                .to(GroundZero, .01, {opacity: 1}, 'wave2')
                .set(Body, {className: '+=OverFlow'}, 'wave2')

            .add('wave3')
                .to(IntroSlide2, 1, {top: '100%', ease:Expo.easeInOut, delay: .3}, 'wave3')
                .to(IntroSlide1, 1, {top: '100%', ease:Expo.easeInOut, delay: .37}, 'wave3')
                .set(ProjectIntroWrap, {display: 'none'})

        ;

    


}());