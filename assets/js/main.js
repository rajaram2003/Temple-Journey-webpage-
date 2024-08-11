/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== GSAP ANIMATION ===============*/
// Animate the home images
// Animate the home images with a wind-like effect
gsap.fromTo('.home__img-1', 
    { x: -10, opacity: 0 }, 
    { x: 10, opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 0.5 }
  );
  
  gsap.fromTo('.home__img-2', 
    { x: -10, opacity: 0 }, 
    { x: 10, opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 1 }
  );
  
  gsap.fromTo('.home__img-3', 
    { x: -10, opacity: 0 }, 
    { x: 10, opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 1.5 }
  );
  
  gsap.fromTo('.home__img-4', 
    { opacity: 0 }, 
    { opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 2 }
  );
  
  gsap.fromTo('.home__img-5', 
    { x: -20, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 2.5 }
  );
  
  gsap.fromTo('.home__img-6', 
    { opacity: 0 }, 
    { opacity: 1, duration: 4, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 3 }
  );
  
  // Animate the lanterns with a wind-like effect
  gsap.fromTo('.home__lantern-1', 
    { y: -10, opacity: 0 }, 
    { y: 10, opacity: 1, duration: 3, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 3.5 }
  );
  
  gsap.fromTo('.home__lantern-2', 
    { y: -10, opacity: 0 }, 
    { y: 10, opacity: 1, duration: 3, ease: 'power1.inOut', repeat: -1, yoyo: true, delay: 4 }
  );
  
  
/*=============== SAKURA ANIMATION ===============*/
const sakura = new Sakura('.sakura-petals')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

