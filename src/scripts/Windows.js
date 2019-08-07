

const Run = () => {

    const ProjectLink1 = document.getElementById('ProjectLink1');
    const ProjectLink2 = document.getElementById('ProjectLink2');
    const ProjectLink3 = document.getElementById('ProjectLink3');
    const ProjectLink4 = document.getElementById('ProjectLink4');
        const Cloud1 = document.getElementById('Cloud1');
        const Cloud2 = document.getElementById('Cloud2');
        const Cloud3 = document.getElementById('Cloud3');
        const Cloud4 = document.getElementById('Cloud4');


    const Project1Hover = () => {
        Cloud1.classList.add('Project1Window');
    }
    const Project1Disable = () => {
        Cloud1.classList.remove('Project1Window');
    }

        const Project2Hover = () => {
        Cloud2.classList.add('Project2Window');
        }
        const Project2Disable = () => {
            Cloud2.classList.remove('Project2Window');
        }

    const Project3Hover = () => {
        Cloud3.classList.add('Project3Window');
    }
    const Project3Disable = () => {
        Cloud3.classList.remove('Project3Window');
    }

        const Project4Hover = () => {
        Cloud4.classList.add('Project4Window');
        }
        const Project4Disable = () => {
            Cloud4.classList.remove('Project4Window');
        }


    ProjectLink1.addEventListener('mouseover', Project1Hover);
    ProjectLink1.addEventListener('mouseleave', Project1Disable);

        ProjectLink2.addEventListener('mouseover', Project2Hover);
        ProjectLink2.addEventListener('mouseleave', Project2Disable);

    ProjectLink3.addEventListener('mouseover', Project3Hover);
    ProjectLink3.addEventListener('mouseleave', Project3Disable);

        ProjectLink4.addEventListener('mouseover', Project4Hover);
        ProjectLink4.addEventListener('mouseleave', Project4Disable);
}


export default Run;