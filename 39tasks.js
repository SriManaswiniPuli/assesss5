//Q1. Implement getUserAge functionconst
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};
//answer
function getUserAge(userData){
    const agee=userData?.user?.profile?.age??"Age not provided";
    return agee;
}
console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

//2. Write a function that returns a new array with an additional skill for each employee
//Clue-Destructuring and spread operator
const employees = [
  { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React"] },
  { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication"] },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];
function additionalskill(employees,add){
    return employees.map((person)=>({
        ...person,skills:[person.skills,add]
         
    }));
    
    
}
console.log(additionalskill(employees,"Problem Solving"))
// Should print: 
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

//Q3. Find the total price of all products using arrow functions and array methods - Implement getTotalPrice
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];
function getTotalPrice(products){
    const a=products.reduce((acc,curr)=>acc+curr.price,0);
    return a
}
console.log(getTotalPrice(products)); // Should print: 2200  

//Q4: Write a function that extracts the user's name and theme, providing default values if they are missing
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};
function getUserSettings(userProfile)
{
    let n=userProfile?.name??"unkmown"
    let t=userProfile?.settings?.theme??"light"
    return `${n} prefers the ${t} theme`
}
console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

//sir
const userProfilee = {
  id: 1,
  namee: "Eve",
  settings: {
    themee: "dark",
  },
};
const getUserSettingss=({namee,settings:{themee="light"}={}}={})=>`${namee} prefers the ${themee} theme`

console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme


//Q5: Write a function that takes a user object and returns a message indicating if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
function getUserStatus(user){
  const a=user.active==true?"active":"inactive"
  return `${user.name} is currently ${a}`
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

//Q6: Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};
function getUserAge(Profilee)
{
   const agee=Profilee?.profile?.age??"Age not provided";
   return agee;
}
console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

//Q7: Write a function that generates a summary string for the top scorer using template literals and array methods
//code-me(didn't work properly)
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];
function getTopScorer(scores)
{
   
  const a=scores.sort((a,b)=>b.score-a.score)[0]
  return `${a.name} is the top scorer with a score of ${a.score}`
}
console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

//Q8: Create a function that returns a greeting message based on the time of day
//Clue
//Use Date methods
// Ex26 - Create a function that returns a greeting message based on the time of day


function greet(name)
{
    let hour=new Date().getHours()
    let a=hour<12?"Good morning":hour>12 && hour<16?"Good afternoon":"Good evening"
    return `${a},${name}`
    

}
console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)


//Q9: Write a function that returns the name of a user's first friend using nested destructuring
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];
//destructuring
//const obj = { a: 1, b: 2 };
//const { a, b } = obj;// is equivalent to:// const a = obj.a;// const b = obj.b;
function getFirstFriendName(id){
  const user=users.find((user)=>user.id==id)
  if(!user)
  {
    return "user not found"
  }
  const {friends}=user
  return friends.length?friends[0].name:`${user.name} has no friends `
}

//or
// const getFirstFriendName=(id)=>{
//   const user=users.find((user)=>user.id==id)
//   if(!user)
//   {
//     return "user not found"
//   }
//   const {friends}=user
//   return friends.length?friends[0].name:`${user.name} has no friends `
// }

// //use find instead of filter since we need one element
// console.log(getFirstFriendName(1)); // Should print: Bob
// console.log(getFirstFriendName(2)); // Should print: Eve
// console.log(getFirstFriendName(3)); // Should print: User not found
// console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

//Q10. Write a function that finds a movie by id and returns its title and genre in a formatted string
//use find instead of filter,no need map-since we do not need array,we need only string 
const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

function getMovieDetails(id){
  const a=movies.find((movie)=>movie.id==id)
  if(!a)
    return "Movie not found"
  else
    return `${a.title} is a ${a.genre} movie`
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found  

//Q11. Write a function that filters out movies released before a certain year and 
//calculates the average rating of the remaining movies (Rating must be rounded)

// const getAverageRatingAfterYear=(year)=>{
//   const filteredmovies=movies.filter((movie)=>movie.year>year);
//   if(filteredmovies.length==0) return "No movies after the specified year";
//   const totalrating=filteredmovies.reduce((sum,movie)=>sum+movie.ratings.reduce((a,b)=>a+b,0)/movie.ratings.length,0);
//   const averagerating=totalrating/filteredmovies.length;
//   return averagerating.toFixed(2);
//   
// }; 

function getAverageRatingAfterYear(year){
  const findmovie=movies.filter((movie)=>movie.year>year);
  if (findmovie.length==0){
    return "No movies after the specified year"
  }
  //const indavg=findmovie.reduce((sum,movie)=>sum+movie.ratings.reduce((a,c)=>a+c,0)/movie.ratings.length,0);

  const indavg=findmovie.reduce((a1,c1)=>a1+c1.ratings.reduce((a,c)=>a+c,0)/c1.ratings.length,0);
  const totalavg=indavg/findmovie.length;
  return totalavg.toFixed(2);
}


console.log(getAverageRatingAfterYear(2016)); // Should print: 8.830 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year  


//Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value

function allRatingsAboveForGenre(rat,genre){
  const genremovies=movies.filter((movie)=>movie.genre==genre)
  .every((movie)=>movie.ratings.every((r)=>r>rat));
  if(!genremovies)
  {
    return `No,not all ${genre} movies are above ${rat} ratings`;
  }
  return `yes,not all ${genre} movies are above ${rat} ratings`;
  
}


console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings


//Q13: Write a function that returns a string with each movie's title and its ratings joined by commas
function getTitlesAndRatings(movies)
{ 
  return movies.map(movie=>`${movie.title}: ${movie.ratings.join(",")}`).join("|")
  //return movies.map(movie=>`${movie.title}: ${movie.ratings.join(",").join("|")})

}
console.log(getTitlesAndRatings(movies));

// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8


//Q14: Write a function that returns a single array containing all ratings of all movies
function getAllRatings(movies)
{ 
  return movies.flatMap(movie=>movie.ratings)
  //return movies.reduce(a,c)=>a.concat(c.ratings),[]);

}


console.log(getAllRatings(movies));
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8] 


//15: Write a function that returns an array of titles of movies that have ratings above a certain threshold in any rating

function getTitlesWithHighRatings(rat){
return movies.filter((movie) => movie.ratings.every((rating) => rating >rat))
.map((movie) => movie.title);
}


console.log(getTitlesWithHighRatings(7)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]//output wrong
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"] //output wrong 


//Q16: Write a function that returns an array of movie titles sorted by their average ratings in descending order
function getTitlesSortedByAverageRating(movies)
{
  return movies 
  .slice()
  .sort((a,b)=>{
    const avgb=b.ratings.reduce((a,c)=>a+c,0)/b.ratings.length 
    const avga=a.ratings.reduce((a,c)=>a+c,0)/a.ratings.length 
    return avgb-avga
  })
  .map(movie=>movie.title)
  
}


console.log(getTitlesSortedByAverageRating(movies)); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]


//Q17: Write a function that finds the movie with the highest average rating and returns its title
 
function getMovieWithHighestAverageRating() {
  //Sort the movies by their average rating in descending order
  const sortedMovies = movies.sort((a, b) => {
    const aAvg =
      a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length;
    const bAvg =
      b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length;
    return bAvg - aAvg;
  });
 
  //Return the title of the first movie in the sorted array
  return sortedMovies[0].title;
}

//or
function getMovieWithHighestAverageRating(){
  const sortedmov=movies.sort((a,b)=>(b.ratings.reduce((a1,c1)=>a1+c1,0)/b.ratings.length)-(a.ratings.reduce((a1,c1)=>a1+c1,0)/a.ratings.length));
  return sortedmov[0].title
}

//or
function getMovieWithHighestAverageRating()
{
  const a=movies.sort((a,b)=>{
    const aAvg =a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length;
    const bAvg =b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length;
    return bAvg - aAvg;
  })
  return a[0].title;
}
console.log(getMovieWithHighestAverageRating());//Bahubali



//Q18: Write a function that returns an array of movie titles released after a certain year

function getTitlesAfterYear(year) {
  return movies.filter((movie) => movie.year > year)
  .map((movie) => movie.title);
  
}

console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]


//Q19: Write a function that finds a movie by its title and returns a formatted string with its director and year
function getMovieInfoByTitle(title) {
  let a = movies.find((movie) => movie.title == title);
  if (a) return `${a.title} directed by ${a.director} was released in ${a.year}`;
  else {
    return "movie not found";
  }
}


console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found 


//Q20: Write a function that returns an array of titles of movies that have at least one rating below a certain threshold

function getTitlesWithLowRatings(rat) {
  // syntax : array.filter(callback(element, index, arr), thisValue)
  return movies
    .filter((movie) => movie.ratings.some((rating) => rating <= rat))
    .map((movie) => movie.title);
}


console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]//output wrong
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]  


//Q21: Write a function that calculates the total number of ratings for movies of a specific genre

function getTotalRatingsByGenre(genre) {
  let a = movies
    .filter((movie) => movie.genre == genre)
    .reduce((acc, movie) => (acc + movie.ratings.length), 0);
  return a;
}


console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3 


//22: Write a function that returns an array of movies where the average rating is above a certain value, including the average rating in the result 

function getMoviesWithHighAverageRating(score) {
  let r = movies.map((mve) => {
      var q = mve.ratings.reduce((a, b) => a + b, 0) / mve.ratings.length;
      return { title: mve.title, avgrat: q.toFixed(2) };
    })
    .filter((mve) => parseFloat(mve.avgrat) > score)
    .map((movie) => `${movie.title} has an average rating of ${movie.avgrat}`);
 
  return r;
}
console.log(getMoviesWithHighAverageRating(8.5));
   //return `${movies.title} has an average rating of ${avgrat}`



//console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an average rating of 8.67"]
 


//Q23: Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order

// function getTitlesByDirectorSortedByYear(director) {
//   let c = movies
//     .filter((movie) => movie.director == director)
//     .sort((a, b) => a.year - b.year)
//     .map((movie) => movie.title);
//   return c;
// }
// console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
// console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"] 



//Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(year) {
  const moviefind = movies.filter((movie) => movie.year == year);
  if(moviefind.length==0)
  {
    return "no movies"
  }
  
  const sum=moviefind.reduce((a1,c1)=>a1+c1.ratings.reduce((a,c)=>a+c,0)/c1.ratings.length,0);
  const average = sum / moviefind.length;
  return average
}

console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2050)); // Should print: "No movies released in the specified year"


//25: Write a function that returns an array of objects with movie titles and their highest ratings 
function getMoviesWithHighestRatings(movies) {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating:Math.max(...movie.ratings)
    
  }));
}


console.log(getMoviesWithHighestRatings(movies));

// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 }, { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }] 


//Q26: Write a function that returns the director with the most movies directed

function getDirectorWithMostMovies() {
  const e = movies.reduce((a, b) => {
    a[b.director] = (a[b.director] || 0) + 1;
    return a;
  }, {});
 
  const maxdir = Object.keys(e).reduce((a, b) => (e[a] > e[b] ? a : b));
 
  return maxdir;
}
console.log(getDirectorWithMostMovies()); // Should print the director with the most movies
console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

//Q27: Write a function that merges two arrays of movies into one using the spread operator
const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

// function mergeMovies(movies, moreMovies) {
//   const merged = [...movies, ...moreMovies];
//   return merged;
// }

function mergeMovies(movies,moreMovies){

  const neww=[...movies,...moreMovies]
  return neww

}
 

console.log(mergeMovies(movies, moreMovies));

//Should print: array with all 7 movies

//Q28: Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator
 
function getTitles(...movies) {
  return movies.map((movie) => movie.title);
}


console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]
 

//output wrong
//Q29: Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array
 
function mergeMovies(movies, moreMovies = []) {
  const mer = [...movies, ...moreMovies];
  return mer;
}

// or const mer=movies.concat(moremovies)
console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
console.log(mergeMovies(movies)); // Should print the original array of movies

//Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N
 
function getLastNMovieTitles(N) {
  return [...movies.map((movie) => movie.title).slice(-N)];
}
// no need spread operator
console.log(getLastNMovieTitles(3)); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles  


//Q31:Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals
//Interesting 
 
// function getMovieTitlesByIds(...id) {
//   let getid = id.map((id) => {
//     let getmovie = movies.find((movie) => movie.id == id);
//     const titlee= getmovie?.title ?? "unknown title";
//     return titlee;
//   });
//   return `selectedMovies:${getid}`;
// }

function getMovieTitlesByIds(...id){
  const a=id.map((id)=>{
    const f=movies.find((movie)=>movie.id==id)
    const titlee=f?.title??"unknown title"
    return titlee;
  })
  return `selectedmovies:${a}` 
}

console.log(getMovieTitlesByIds(1, 3, 5));
//Should print: selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
//Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
//Should print: Selected Movies: Jersey, Baahubali,


//Q32: Write a function that accepts any number of movies and returns a formatted string listing their titles and genres using the rest operator, nullish coalescing, and template 
//literals Interesting
 
// function listMovies(...movies) {
//   let moviess = movies.map((movie) => {
//     const title = movie?.title ?? "Unknown Title";
//     const genre = movie?.genre ?? "Unknown Genre";
//     return `${title} (${genre})`;
//   });
 
//   return moviess.join(", ");
// }
// console.log(listMovies(...movies));

function listMovies(...movies){
  const a=movies.map((movie)=>{
    const titlee=movie?.title??"unknown title";
    const genree=movie?.genre??"unknown genre";
    return `${titlee} (${genree})`
  })
  return a
}


console.log(listMovies(...movies));

//Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
//Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)
 

//Q33: Write a function that calculates the total number of ratings for each director
// Challenging
//Ex81 -
// aishh
// const getTotalRatingsForDirectors = () => {
//   return movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
// };
 

const getTotalRatingsForDirectors=()=>{
  return movies.reduce((a,c)=>{
    a[c.director]=(a[c.director] || 0)+c.ratings.length;
    return a;
  },{});
}
console.log(getTotalRatingsForDirectors())


//Q34: Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genres Challenging

// function getGenresSortedByTotalRatings(movies){
//   const genreRatings = movies.reduce((acc, movie) => {
//     acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
//   return Object.keys(genreRatings).sort((a, b) => genreRatings[b] - genreRatings[a]);
// };
// console.log(getGenresSortedByTotalRatings(movies)); // Should print genres sorted by total ratings

function getGenresSortedByTotalRatings(movies){
  const ans=movies.reduce((a,c)=>{
    a[c.genre]=(a[c.genre]||0)+c.ratings.length;
    return a
  },{})
  return Object.keys(ans).sort((a1,b1)=>ans[b1]-ans[a1])
}
console.log(getGenresSortedByTotalRatings(movies));// Should print genres sorted by total ratings



//Q35: Write a function that returns an array of movie titles directed by directors who have directed more than one movie Challenging
// const getTitlesByDirectorsWithMultipleMovies = (movies) => {
//   const directorCount = movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + 1;
//     return acc;
//   }, {});
//   return movies
//     .filter((movie) => directorCount[movie.director] > 1)
//     .map((movie) => movie.title); 
// };

// console.log(getTitlesByDirectorsWithMultipleMovies(movies)); // Should print: ["Baahubali", "Eega"]


function getTitlesByDirectorsWithMultipleMoviess(movies){
  const ans=movies.reduce((a,c)=>{
    a[c.director]=(a[c.director]||0)+1;
    return a;
  },{});
  return movies.filter((m)=>ans[m.director]>1)
  .map((m)=>m.title); 
}
console.log(getTitlesByDirectorsWithMultipleMoviess(movies)); // Should print: ["Baahubali", "Eega"]




//36 Write a function that calculates the total number of ratings for each genre and returns the genre with the highest total ratings Challenging 
// const getGenreWithHighestTotalRatings = (movies) => {
//   const genreRatings = movies.reduce((acc, movie) => {
//     acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
//   return Object.keys(genreRatings).sort((a,b)=>genreRatings[b]-genreRatings[a])[0]
// };


const getGenreWithHighestTotalRatings = (movies) => {
  const genreRatings = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
    return acc;
  }, {});
  return Object.keys(genreRatings).reduce((a, b) =>
    genreRatings[a] > genreRatings[b] ? a : b,
  );
};
console.log(getGenreWithHighestTotalRatings(movies)); // Should print the genre with the highest total ratings


// //Q37: Write a function that returns an array of directors who have directed movies with an average rating above a certain value 
// //Challenging
// const getDirectorsWithHighAverageRatings = (movies, threshold) => {
//   const directorRatings = movies.reduce((acc, movie) => {
//     if (!acc[movie.director]) {
//       acc[movie.director] = { total: 0, count: 0 };
//     }
//     acc[movie.director].total += movie.ratings.reduce(
//       (sum, rating) => sum + rating,
//       0,
//     );
//     acc[movie.director].count += movie.ratings.length;
//     return acc;
//   }, {});

//   return Object.keys(directorRatings).filter((director) => {
//     const avgRating =
//       directorRatings[director].total / directorRatings[director].count;
//     return avgRating > threshold;
//   });
// };
// console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings


//Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring, spread operator, and default values Challenging
const updateMovieDetails = (movies, id, { genre, ratings }) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";
  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };
  return movies[index];
};
console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found

const updateMovieDetailss = (movies, id, { genre = '', ratings = [] } = {}) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";

  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };

  return movies[index];
};
console.log(updateMovieDetailss(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetailss(6, { genre: "Thriller" }));
// Should print: Movie not found


//Q39: Update or add a movie based on the id Challenging
console.log(
  updateOrAddMovie({
    id: 6,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  })
);
// Should add Pushpa to the list
console.log(
  updateOrAddMovie({
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [10, 10, 9],
    genre: "Sports",
  })
);
// Should update Jersey's ratings in the list

const updateOrAddMovie = (movies, newMovie) => {
  const index = movies.findIndex((movie) => movie.id == newMovie.id);
  if (index === -1) {
    movies.push(newMovie);
  } else {
    movies[index] = {
      ...movies[index],
      ...newMovie,
    };
  } 
  return movies;  
};

