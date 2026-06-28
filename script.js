// ===============================
// BRISTI PLAY - script.js
// ===============================

// Video Player
const player = document.getElementById("player");

function playVideo(video) {
    if (!player) return;

    player.src = video;
    player.style.display = "block";

    player.scrollIntoView({
        behavior: "smooth"
    });

    player.play();
}

// Search
const search = document.querySelector(".search");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let movies = document.querySelectorAll(".movie-card");

        movies.forEach(function (movie) {

            let title = movie.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }

        });

    });

}

// Signup
function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {

        alert("Please fill all fields");
        return;

    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully!");

    window.location = "login.html";

}

// Login
function login() {

    let email = document.querySelector("input[type=email]").value;
    let password = document.querySelector("input[type=password]").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {

        alert("Welcome to BRISTI PLAY");

        window.location = "index.html";

    } else {

        alert("Invalid Email or Password");

    }

}

// Logout
function logout() {

    alert("Logged Out");

    window.location = "login.html";

}
