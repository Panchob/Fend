/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");


// Found on stack overflow by user Dan
// https://stackoverflow.com/a/7557433/13506641
function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -100 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight ||
                        document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
                       document.documentElement.clientWidth)
    );
}


function populateNavBar(){
    let listElements = "";
    for (const section of sections) {
        const list = `<li class=menu__link>
                    <a name="${section.id}">${section.getAttribute("data-nav")}</a>
                </li>`;
        listElements += list;
    }
    navbar.insertAdjacentHTML("afterbegin", listElements);
}


function setSectionActive(){
    for (const section of sections) {
        if (isElementInViewport(section)){
            section.classList.add("active");
        }
        else{
            section.classList.remove("active");
        }
    }
}


// Scroll to the the section represented in the nav bar.
// Consider that the user may click the li element or
// the anchor directly
function scrollToSection(e){
    let id;
    if (e.target.tagName == "LI"){
        const anchor = e.target.querySelector("a");
        id = anchor.getAttribute("name");
    }
    else{
        id = e.target.getAttribute("name");
    }
    
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: 'smooth'});
}


// First dynamically create the navbar.
populateNavBar();
// Add a listener to the container of the created list.
// When clicked on, the page will scroll to the section.
navbar.addEventListener('click', scrollToSection);
// Add a listener to the window that set a section "active"
// when in view.
window.addEventListener("scroll", setSectionActive);
