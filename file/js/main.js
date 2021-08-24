/* === MENU GROUP === */
// menu group display
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
// open
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// close
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// click and menu is gone
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
// adding event listener on click
navLink.forEach(link => link.addEventListener('click', linkAction))


/* === SKILLS SECTION === */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    // selected skill
    let itemClass = this.parentNode.className

    // // close all skills
    // for(i = 0; i < skillsContent.length; i++) {
    //     skillsContent[i].className = 'skills__content skills__close'
    // }

    // if was closed then open it up otherwise stay closed as it is
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    } else {
        this.parentNode.className = 'skills__content skills__close'
    }
}
// adding event listener on click
skillsHeader.forEach((skillSection) => {
    skillSection.addEventListener('click', toggleSkills)
})


/* == QUALIFICATION == */
const qualificationTabs = document.querySelectorAll('[data-target]'),
    qualificationTabsContents = document.querySelectorAll('[data-content]')

// switch and highlight(add class) to the selected tab
qualificationTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        qualificationTabsContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        qualificationTabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/* == SERVICES == */
const servicesModalViews = document.querySelectorAll('.services__modal'),
    servicesModalOpen = document.querySelectorAll('.services__button'),
    servicesModalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalPanelNum) {
    servicesModalViews[modalPanelNum].classList.add('active-modal')
}

servicesModalOpen.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

servicesModalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        servicesModalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

function scrollBottom(){
    const scrollBottom = document.getElementById('scroll-down');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY <= 150) scrollBottom.classList.add('show-scroll'); else scrollBottom.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollBottom)