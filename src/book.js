function createTitle(title) {
  return "The " + title
  
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name, 
    age: age,
    pronouns: pronouns
  };
  }


  function saveReview(reviews, reviewsArray) {
    if (!reviewsArray.includes(reviews))
    reviewsArray.push(reviews);
    
  }

function calculatePageCount(title) {
  return title.length * 20}



function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {
book.pageCount = book.pageCount * 0.75}






  module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

