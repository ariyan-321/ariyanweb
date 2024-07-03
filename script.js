document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about');
  const projectsSection = document.querySelector('#projects');

  const revealSections = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > aboutSection.offsetTop - window.innerHeight + 100) {
          aboutSection.classList.add('visible');
      }

      if (scrollPosition > projectsSection.offsetTop - window.innerHeight + 100) {
          projectsSection.classList.add('visible');
      }
  };

  window.addEventListener('scroll', revealSections);
  revealSections();
});
