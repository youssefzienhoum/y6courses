let buttons = [
    document.getElementById('arrow-1'),
    document.getElementById('arrow-2'),
    document.getElementById('arrow-3'),
    document.getElementById('arrow-4')
];/* list buutons in page */ 
let lists = [
    document.getElementById('inputs-1'),
    document.getElementById('inputs-2'),
    document.getElementById('inputs-3'),
    document.getElementById('inputs-4')
];/* list inputs */

function toggleList(buttonIndex) { /* check a list is none or not to appear */
    /* buttonIndex to know any button is clicked */
    if (lists[buttonIndex].style.display === 'none') {
    lists[buttonIndex].style.display = 'block';
    } else {
    lists[buttonIndex].style.display = 'none';
    }
}

    for (let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', function() { /* to check any button is click */
    /* call toggleList to implement block of code */
    toggleList(i);
    });
}


/* text design course */
let text="Programming courses";
let element=document.getElementById("head");
let i=0;
let interval = setInterval(function () { /*setinterval => this is function repeat the blockof code
at the specified time , setInterval(function , time repeat)*/
element.textContent += text[i];
    /* it is used like innerHtml where add char to the div with repeat */
i++;
if (i === text.length) {
    clearInterval(interval);/* it is used to stop the setInterval by variable like interval */
}
}, 120);

/* Drop-menu */

let dropbutton = document.getElementById("arrownav");
let dropmenu = document.getElementById("list");


function Drop() {
    // Check if list is currently hidden to avoid unnecessary animations
if (dropmenu.style.display === 'none') {
    // Create a new animation for smooth appearance
    let animation = dropmenu.animate([
        { opacity: 0 }, // Start from completely transparent
        { opacity: 1, transform: 'translateY(-10px)' } // change opacity from 0-->1 by animate and transform -110px to down
    ], {
        duration: 500, /* duration to slowely event */
    });

    // Show the list after animation completes
    dropmenu.style.display = 'block';
    dropbutton=icon;
} else {
    dropmenu.style.display = 'none'; // Hide the list normally
}
}

dropbutton.addEventListener('click', Drop); /* addEventListener is used to add event by click on button */

/* reblace-css-file */

let replacebutton = document.getElementById("replace");
let theme1 =document.getElementById("theme1");
let theme2 =document.getElementById("theme2");

replacebutton.addEventListener('click', function () {
    if(theme2.hasAttribute('disabled')) {
        theme2.removeAttribute('disabled');
        theme1.setAttribute('disabled','disabled');
    }
    else {
        theme2.setAttribute('disabled','disabled');
        theme1.removeAttribute('disabled');
    }
});

