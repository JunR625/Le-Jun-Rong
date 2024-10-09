document.getElementById("button").onclick = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "test@gmail.com" && password === "test") {
        message.innerHTML = "Success!"
    } else {
        message.innerHTML = "Error!"
    }
};

