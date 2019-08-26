
import { TweenMax, TimelineMax, Power1, CustomEase, Power2 } from 'gsap/all';



//Wrap
(function(){


    //Variables ---------------------------------
        const Body = document.getElementById('Body');
        const LandingIntro = document.getElementById('Landing-Intro');
        const LandingIntroText1 = document.getElementById('Landing-Intro-Text1');
        const LandingIntroText2 = document.getElementById('Landing-Intro-Text2');
        const LandingIntroText3 = document.getElementById('Landing-Intro-Text3');
        const LandingEnterButton = document.getElementById('Landing-Intro-Button');
        const DivideLine = document.getElementById('Landing-Intro-Divide-Line');
        const SlideLeft = document.getElementById('Landing-IntroSlideLeft');
        const SlideRight = document.getElementById('LandingIntroSlideRight');
        const GroundZero = document.getElementById('GroundZero');
        const ScrollBar = document.getElementById('ScrollBar');
        const Logo = document.getElementById('Portfolio-Logo');
        const Nav = document.getElementById('Nav');
        const PortfolioTitle = document.getElementById('PortfolioTitle');
        const TitleHide = document.getElementById('Title-Hide');
        const Context = document.getElementById('PortfolioContext');
        const ProjectsTitle = document.getElementById('PortfolioProjectsTitle');
        const Project1 = document.getElementById('Project1');
        const Project2 = document.getElementById('Project2');
        const Project3 = document.getElementById('Project3');
        const Project4 = document.getElementById('Project4');
        const Project5 = document.getElementById('Project5');





    //Scenes ----------------------------------
        const EnterCoverScene = new TimelineMax();
            EnterCoverScene
                .to(LandingIntroText1, .75, {
                    opacity: 1,
                    ease: Power1.easeInOut,
                    delay: .8
                })
                .to(LandingIntroText2, .75, {
                    opacity: 1,
                    ease: Power1.easeInOut,
                }, '-=.5')
                .to(LandingIntroText3, .75, {
                    opacity: 1,
                    ease: Power1.easeInOut,
                }, '-=.5')
                .to(LandingEnterButton, .75, {
                    opacity: 1,
                    ease: Power1.easeInOut,
                }, '-=.5')
            ;


        const ExitCoverScene = new TimelineMax();
            ExitCoverScene
                .to(LandingIntroText1, .6, {
                    opacity: 0,
                    x: '-100%',
                    ease: Power1.easeInOut,
                    delay: .8
                })
                .to(LandingIntroText2, .6, {
                    opacity: 0,
                    x: '-100%',
                    ease: Power1.easeInOut,
                }, '-=.5')
                .to(LandingIntroText3, .6, {
                    opacity: 0,
                    x: '-100%',
                    ease: Power1.easeInOut,
                }, '-=.5')
                .to(LandingEnterButton, .75, {
                    opacity: 0,
                    y: '100%',
                    ease: Power1.easeInOut,
                }, '-=.5')
            ;   

            ExitCoverScene.pause();

                //Trigger Exit Cover Scene
                const EnterSite = (e) => {
                    ExitCoverScene.play();
                    LandingIntroScene.play();
                }

                //Listener
                LandingEnterButton.addEventListener('click', EnterSite);



        const LandingIntroScene = new TimelineMax();
            LandingIntroScene 
                
                    .to(DivideLine, .6, {
                        bottom: 0,
                        ease: Power2.easeInOut,
                        delay: 2.5})
                    .to(DivideLine, .2, {opacity: 0},)
                    
                .add('wave1')
                    .to(SlideLeft, 1, {
                        x: '-100%', 
                        ease: Expo.easeInOut}, 'wave1')
                    .to(SlideRight, 1, {
                        x: '100%', 
                        ease: Expo.easeInOut}, 'wave1')
                    .to(DivideLine, .6, {
                        bottom: '-100%',
                        ease: Expo.easeInOut,
                        delay: .15}, '-=.3')
                    .to(ScrollBar, .01, {opacity: 1})
                    
                .add('wave2')
                    
                    .to(GroundZero, .01, {opacity: 1})
                    .to(LandingIntro, .01, {display: 'none'})
                    .to(Logo, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, 'wave2')
                    .to(Nav, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, 'wave2')
                    .set(Body, {className: '+=OverFlow'})
                    
                    .to(PortfolioTitle, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn},)
                    
                    .to(ProjectsTitle, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Context, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Project1, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Project2, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Project3, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Project4, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')
                    .to(Project5, .6, {
                        opacity: 1, 
                        ease: Power1.easeIn}, '-=.4')


            ;

            LandingIntroScene.pause();
    


}());