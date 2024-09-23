setInterval(() => {
    document.getElementById("clock").innerHTML = new Date().toUTCString();
}, 1000)