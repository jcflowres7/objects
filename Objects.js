var movies = [
  {
    Name: "Super Troopers",
    Year: 2001,
    Director: "Jay Chandrasekhar",
    url: "https://upload.wikimedia.org/wikipedia/en/1/19/Supertrooper.jpg",
  },
  {
    Name: "Kubo and the Two Strings",
    Year: 2016,
    Director: "Travis Knight",
    url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Kubo_and_the_Two_Strings_poster.png/220px-Kubo_and_the_Two_Strings_poster.png",
  },
  {
    Name: "The Other Guys",
    Year: 2010,
    Director: "Adam McKay",
    url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Other_guys_poster.jpg",
  },
];
var orderedList = document.querySelector("ol");


var listelements = movies.map(function (movie) {
  var listelement = `
        <li>
            <p>${movie.Name}</p>
            <p>${movie.Year}</p>
            <p>${movie.Director}</p>
            <img src="${movie.url}"/> 
        </li>
    `;
  return listelement;
});
orderedList.innerHTML = listelements;
