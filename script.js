const moviesContainer = document.querySelector("#moviesContainer");
const searchBtn = document.querySelector("button");
const inputBar = document.querySelector("input");

async function fetchMovies() {
  const inputValue = inputBar.value;
  const API_KEY = "f0f95209";
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
  );
  const data = await res.json();

  if (data.Response === "True") {
    moviesContainer.innerHTML = "";
    for (const movie of data.Search) {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movieCard");
      const heading = document.createElement("h3");
      heading.innerHTML = movie.Title;
      movieDiv.appendChild(heading);
      const movieImg = document.createElement("img");
      movieImg.src = movie.Poster;
      movieDiv.appendChild(movieImg);
      moviesContainer.appendChild(movieDiv);
      movieDiv.appendChild(heading);
      console.log(data.Search);
    }
  }
  inputBar.value = "";
}

searchBtn.addEventListener("click", fetchMovies);
