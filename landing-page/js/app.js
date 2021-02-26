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

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function getNavigation() {
    const navList = document.querySelector('#navbar__list')

    const sections = document.getElementsByClassName('landing__container')
    // console.log("HERE")
    for (let i = 0; i < sections.length; i++) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = sections[i].querySelector('h2').innerText;

        // Add listItem to the listElement
        navList.appendChild(listItem);
        // console.log(sections[i].querySelector('h2').innerText)
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


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
