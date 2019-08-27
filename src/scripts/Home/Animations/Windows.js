import { TweenMax, TimelineMax, Power1, CustomEase, Power2 } from 'gsap/all';

//Window Scripts


(function(){

    //GSAP ------------------------ -------------------------

        //Variables --------------- ------- ---

        const ProjectLink1 = document.getElementById('ProjectLink1');
        const ProjectLink2 = document.getElementById('ProjectLink2');
        const ProjectLink3 = document.getElementById('ProjectLink3');
        const ProjectLink4 = document.getElementById('ProjectLink4');
        const ProjectLink5 = document.getElementById('ProjectLink5');
            const Cloud1 = document.getElementById('Cloud1');
            const Cloud2 = document.getElementById('Cloud2');
            const Cloud3 = document.getElementById('Cloud3');
            const Cloud4 = document.getElementById('Cloud4');
            const Cloud5 = document.getElementById('Cloud5');

        //Variables --------------- ------- ---

        //Timelines ----------- ------ ---- -- -

            const Cloud1Tl = new TimelineMax();
                Cloud1Tl
                    .to(Cloud1, .3, {opacity: .85, ease: Power0.ease})
                ;
                Cloud1Tl.pause();

                const Cloud2Tl = new TimelineMax();
                    Cloud2Tl
                        .to(Cloud2, .3, {opacity: .85, ease: Power0.ease})
                    ;
                    Cloud2Tl.pause();

                    const Cloud3Tl = new TimelineMax();
                        Cloud3Tl
                            .to(Cloud3, .3, {opacity: .85, ease: Power0.ease})
                        ;
                        Cloud3Tl.pause();

                const Cloud4Tl = new TimelineMax();
                    Cloud4Tl
                        .to(Cloud4, .3, {opacity: .85, ease: Power0.ease})
                    ;
                    Cloud4Tl.pause();

            const Cloud5Tl = new TimelineMax();
                Cloud5Tl
                    .to(Cloud5, .3, {opacity: .85, ease: Power0.ease})
                ;
                Cloud5Tl.pause();




        //Functions ----------- ------ ---- -- -

            const Project1Hover = () => {
                Cloud1Tl.play();
            }
            const Project1Disable = () => {
                Cloud1Tl.reverse();
            }
                const Project2Hover = () => {
                    Cloud2Tl.play();
                }
                const Project2Disable = () => {
                    Cloud2Tl.reverse();
                }
            const Project3Hover = () => {
                Cloud3Tl.play();
            }
            const Project3Disable = () => {
                Cloud3Tl.reverse();
            }
                const Project4Hover = () => {
                    Cloud4Tl.play();
                }
                const Project4Disable = () => {
                    Cloud4Tl.reverse();
                }
            const Project5Hover = () => {
                Cloud5Tl.play();
            }
            const Project5Disable = () => {
                Cloud5Tl.reverse();
            }

        

    ProjectLink1.addEventListener('mouseover', Project1Hover);
    ProjectLink1.addEventListener('mouseleave', Project1Disable);

        ProjectLink2.addEventListener('mouseover', Project2Hover);
        ProjectLink2.addEventListener('mouseleave', Project2Disable);

    ProjectLink3.addEventListener('mouseover', Project3Hover);
    ProjectLink3.addEventListener('mouseleave', Project3Disable);

        ProjectLink4.addEventListener('mouseover', Project4Hover);
        ProjectLink4.addEventListener('mouseleave', Project4Disable);

    ProjectLink5.addEventListener('mouseover', Project5Hover);
    ProjectLink5.addEventListener('mouseleave', Project5Disable);

}());
