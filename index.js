do {} while (typeof document.getElementById == null)

setInterval(() => {
    document.getElementById("clock").innerHTML = new Date().toUTCString();
}, 1000)