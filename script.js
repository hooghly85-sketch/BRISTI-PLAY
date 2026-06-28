// BRISTI PLAY - Script

const player = document.getElementById("player");

function playVideo(video){
    player.src = video;
    player.style.display = "block";

    player.scrollIntoView({
        behavior: "smooth"
    });

    player.play();
}

// Search (Part 1)
const search = document.querySelector(".search");

search.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie){

        let title = movie.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            movie.style.display = "block";
        }else{
            movie.style.display = "none";
        }

    });

});
