window.onload = function() {
    setTimeout(function() {
        if (typeof(window.google_jobrunner) === "undefined") {
            console.log("Ad-Blocker Found")
            document.getElementById("anti-ad").style.display = "";
        } else {
            document.getElementById("anti-ad").style.display = "none";
            console.log("no ad blocking found.");
        }
    }, 20000);
};

console.log("Nothing to see here, enjoy the website")

openbtn.addEventListener('click', openNav)

closebtn.addEventListener('click', closeNav)

function openNav(e) {
    e.stopPropagation()
    mySidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    openbtn.style.visibility = "hidden";
}

function closeNav() {
    mySidebar.style.width = "0";
    main.style.marginLeft = "0";
    openbtn.style.visibility = "visible";
}

document.addEventListener('click', function(e) {
    if (e.target !== mySidebar && !mySidebar.contains(e.target)) {
        closeNav();
    }
});