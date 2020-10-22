// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];




// Task 1.0 Select and cache the <main>element in a variable named mainEl


const mainEl = document.querySelector('main');
 

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';



// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1> SEI Rocks! </h1>'

// Task 1.3 Add a class of flex-ctrto mainEl.
mainEl.classList.add("flex-ctr")
// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');

// Task 2.1
// Set the height topMenuEl element to be 100%. 
topMenuEl.style.height = "100%" ;
// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor =  `var(--top-menu-bg)`;

// Task 2.3
// Add a class of flex-aroundto topMenuEl.

topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js:


// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element. 
// 
menuLinks.forEach(function(link) {
let newAnchor = document.createElement('a');
// On the new element, add an href attribute with its value set to the href property of the "link" object.
newAnchor.setAttribute('href', link ['href']);
// Set the new element's content to the value of the text property of the "link" object.
newAnchor.innerHTML = link['text'];
// Append the new element to the topMenuElelement.
topMenuEl.appendChild(newAnchor)
});