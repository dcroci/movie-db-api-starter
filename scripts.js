let popularHTML = document.querySelector('#popular');
let yearHTML = document.querySelector('#birthYear');
function getPopularMovies() {
  const data = null;
  const key = '5c4b291b344c2fed6aa3b45a36667808';
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  const xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const res = JSON.parse(this.responseText);
      const results = res.results;
      if (results) {
        // console.log(results);
        for (let i = 0; i < 4; i++) {
          popularHTML.innerHTML += `
            <figure>
                <img src=${imgUrl}${results[i].poster_path} alt=''/>
                <figcaption>${results[i].title}</figcaption>
            </figure>`;
          //   console.log(results[i]);
        }
      }
    }
  });

  xhr.open(
    'GET',
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  );
  xhr.setRequestHeader('accept', 'application/json');
  //   xhr.setRequestHeader(
  //     'Authorization',
  //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzRiMjkxYjM0NGMyZmVkNmFhM2I0NWEzNjY2NzgwOCIsInN1YiI6IjY1YmMxNjQ3MmQxZTQwMDE2MzViYWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UIFmSyyeCyS8sXiXnvWq4BlYWl_bx7JmYi-y2_YDjpw'
  //   );

  xhr.send(data);
}
function getBirthYearMovies(e) {
  e.preventDefault();
  const data = null;
  const key = '5c4b291b344c2fed6aa3b45a36667808';
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const year = encodeURI(document.getElementById('userYear'));

  const xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const res = JSON.parse(this.responseText);
      console.log(res);
      const results = res.results;
      if (results) {
        console.log(results);
        for (let i = 0; i < 4; i++) {
          yearHTML.innerHTML += `
            <figure>
                <img src=${imgUrl}${results[i].poster_path} alt=''/>
                <figcaption>${results[i].title}</figcaption>
            </figure>`;
          console.log(results[i]);
        }
      }
    }
  });

  xhr.open(
    'GET',
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_year=${year}&sort_by=revenue.desc&language=en-US&page=1&include_adult=false`
  );
  xhr.setRequestHeader('accept', 'application/json');
  xhr.send(data);
}
window.addEventListener('load', function () {
  getPopularMovies();
  document
    .getElementById('yearBtn')
    .addEventListener('click', getBirthYearMovies);
});
