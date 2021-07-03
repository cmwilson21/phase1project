//User input - Dropdown box selects the book
//Something happens - The page loads characters from the book
//Something else happens - the drop down changes colors on mouse over.

//Events 
//Mouseover/Mouseout color change on drop down box
//Selection pulls in data from JSON to display that filters characters ("click")
//*Create a search button - if there's time

//Node Getters
const getForm = () => document.getElementById("form");
const getSelect = () => document.getElementById("select-books");
const displayCharacter = () => document.getElementById("display");

// Event Listeners
document.addEventListener('DOMContentLoaded',() => {
    getForm().addEventListener('submit', submitForm);
})
//Mouse over change color
getSelect().addEventListener('mouseover', () => {
    getSelect().style.backgroundColor = "white";
});
//Mouse out, change color back
getSelect().addEventListener('mouseout', function() {
    getSelect().style.backgroundColor = "rgb(179, 177, 177)";
});


//Establishing the Submit Button
const submitForm = e => {
    e.preventDefault();
    displayCharacter().innerHTML='';
    //Grabbing the info from the dropdown
    let title = getSelect().value;
   //Grabbing data from JSON
    fetch('http://localhost:3000/books')
    .then(respond => respond.json())
    //Filtering through the books from the data to grab the characters from each
    .then(books => {
        let filteredBook = books.find(book => title === book.title)
        //Found the book, now find the characters
        filteredBook.characters.forEach(character => {
            //Displaying info into p tag
            let p = document.createElement('p');
            p.innerText = character.name;
            displayCharacter().appendChild(p);
        } 
        ) }
        )
}

//Slide Show JS
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}