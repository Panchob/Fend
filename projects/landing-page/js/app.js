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



function countNbOfSections(){
    return document.getElementsByTagName("section").length;
}


function addSections(nbToAdd, currentNbOfSections){
    let contentToAdd ="";
    const mainSection = document.querySelector("main");
    currentNbOfSections ++;

    for (let i = 0; i < nbToAdd; i++){
        const section = 
        `<section id="section${currentNbOfSections}" data-nav="Section ${currentNbOfSections}" >
            <div class="landing__container">
                <h2>Section ${currentNbOfSections}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
                <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>`;
        contentToAdd += section;
        currentNbOfSections++;
    }
    mainSection.insertAdjacentHTML("beforeend", contentToAdd);
}

function populateNavBar(nbOfSections){
    const navbar = document.getElementById("navbar__list")
    let listElements = ""

    for (let i = 0; i <= nbOfSections; i++){
        list = `<li class=menu__link>Section ${i}</li>`;
        listElements += list;
    }
    navbar.insertAdjacentHTML("afterbegin", listElements);
}



const currentNbOfSections = countNbOfSections();
const nbOfSectionsToAdd = 3;

addSections(nbOfSectionsToAdd, currentNbOfSections);
populateNavBar(nbOfSectionsToAdd + currentNbOfSections);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
