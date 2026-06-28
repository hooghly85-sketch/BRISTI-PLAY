// ===============================
// BRISTI PLAY - script.js
// ===============================

// Video Player
const player = document.getElementById("player");

function playVideo(video) {

    if (!player) return;

    player.src = video;
    player.style.display = "block";

    player.load();

    player.play();

    player.scrollIntoView({
        behavior: "smooth"
    });

}

// Search
const search = document.querySelector(".search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const movies = document.querySelectorAll(".movie-card");

        movies.forEach(function (movie) {

            const title = movie.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }

        });

    });

}

// Favourite / My List
function addToMyList(title) {

    let list = JSON.parse(localStorage.getItem("myList")) || [];

    if (!list.includes(title)) {

        list.push(title);

        localStorage.setItem("myList", JSON.stringify(list));

        alert(title + " added to My List");

    } else {

        alert("Already added");

    }

}

// Show My List
function showMyList() {

    const list = JSON.parse(localStorage.getItem("myList")) || [];

    const container = document.getElementById("myListContainer");

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = "<p>No movies added.</p>";

        return;

    }

    container.innerHTML = "";

    list.forEach(function(movie){

        container.innerHTML += `
        <div class="movie-card">
            <h3>${movie}</h3>
        </div>
        `;

    });

}

// Auto Load
window.onload = function(){

    showMyList();

};
