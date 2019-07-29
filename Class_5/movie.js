(function () {
  /* Create an object constructor function that represents a movie.
  The object should have ratings property that is an array of the rating numbers,
  and avgRating that should be average of the items in the array.
  The object should have a method addRating that adds rating to the array
  and also updates the averageRating.*/

  function Movie(title) {
    this.title = title;
    this.avgRating = 0;
    this.ratings = [];
    this.addRating = function (rating) {
      this.ratings.push (rating);
      this.avgRating = this.ratings.reduce((prev, curr) => prev + curr) / this.ratings.length;
    };
  }

  // Assuming object is already defined above, one should be able to do the following:

  // Create the object
  const movie = new Movie("The Lego Movie");
  // Output the movie title
  console.log(movie.title);
  // Output the current average rating. Should be 0.
  console.log(movie.avgRating);
  // This movie is awesome, let's give it 10 stars.
  movie.addRating(10);
  // Output the current average rating.
  console.log(movie.avgRating);
  // Not everyone liked it :(
  movie.addRating(6);
  // Should be 8.
  console.log(movie.avgRating);
  // Should output Array [10, 6]
  console.log(movie.ratings);

}) ();
