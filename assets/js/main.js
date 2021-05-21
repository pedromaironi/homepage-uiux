// import 'boxicons';
// import 'scrollreveal';

/*==================== SHOW MENU ====================*/

    // Validate that variables exist

            // We add the show-menu class to the div tag with the nav__menu class

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu');
      });
  }
};
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader() {
  const nav = document.getElementById('header');
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
  const scrolltop = document.getElementById('scroll-top');
  if(this.scrollY >= 560) scrolltop.classList.add('scroll-top'); else scrolltop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 


// Previously selected topic (if user selected)

// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic

  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  


// Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
    
//     // We save the theme and the current icon that the user chose
    
// })

/*==================== SCROLL REVEAL ANIMATION ====================*/
