// Your code goes here

//expected 'JavaScript is so cool. It lets me add text to my page programmatically.' 
//to equal 'This is really cool!'

//DOMContentLoaded happens when DOM is fully parsed
//load event happens when all CSS and JS have finsihed loading


//first set up a DOMContentLoaded event listener

//use textContent or innerHTML for this lab


document.addEventListener("DOMContentLoaded", function(){
    // console.log("The DOM has loaded");
    updateDOM()
});

// console.log( "This console.log() fires when index.js loads - before the DOMContentLoaded");

function updateDOM() {
    document.getElementById("text").innerHTML = "This is really cool!";
}


