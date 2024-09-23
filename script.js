do {} while (typeof document.getElementById == null);

// First modification of element with id "clock"
document.getElementById("clock").innerHTML = new Date().toUTCString();

// Loop every 1 second updating the text of "#clock"
setInterval(() => {
    document.getElementById("clock").innerHTML = new Date().toUTCString();
}, 1000)