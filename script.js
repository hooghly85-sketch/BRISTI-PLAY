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
function addMovie(){

let title=document.getElementById("movieTitle").value;
let description=document.getElementById("movieDescription").value;
let poster=document.getElementById("poster").value;
let video=document.getElementById("video").value;

if(title==""||description==""||poster==""||video==""){
alert("Please fill all fields");
return;
}

let movie={
title:title,
description:description,
poster:poster,
video:video
};

let movies=JSON.parse(localStorage.getItem("movies"))||[];

movies.push(movie);

localStorage.setItem("movies",JSON.stringify(movies));

alert("Movie Added Successfully");

showMovies();

}

function showMovies(){

let movies=JSON.parse(localStorage.getItem("movies"))||[];

let output="";

movies.forEach(function(movie,index){

output+=`
<div class="movie-card">
<img src="${movie.poster}">
<h3>${movie.title}</h3>
<p>${movie.description}</p>
<button onclick="deleteMovie(${index})">Delete</button>
</div>
`;

});

let list=document.getElementById("movieList");

if(list){
list.innerHTML=output;
}

}

function deleteMovie(index){

let movies=JSON.parse(localStorage.getItem("movies"))||[];

movies.splice(index,1);

localStorage.setItem("movies",JSON.stringify(movies));

showMovies();

}

window.onload=function(){

if(document.getElementById("movieList")){
showMovies();
}

    }
