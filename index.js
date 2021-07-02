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
document.getElementById('select-books').addEventListener('mouseover', function() {
    document.getElementById('select-books').style.backgroundColor = "white";
});
//Mouse out, change color back
document.getElementById('select-books').addEventListener('mouseout', function() {
    document.getElementById('select-books').style.backgroundColor = "rgb(179, 177, 177)";
});

//Grabbing data from JSON
const submitForm = e => {
    e.preventDefault();
    let title = getSelect().value;
    fetch('http://localhost:3000/books')
    .then(respond => respond.json())
    //Filtering through the books to grab the characters from each
    .then(books => {
            let filteredBooks = books.filter(book => book.characters.find(characters => 'The Winter King'))
            filteredBooks.forEach(book => {
                //Displaying info into p tag
                let p = document.createElement('p');
                p.innerText = book.characters[0].name;
                displayCharacter().appendChild(p);
    } 
    ) }
    )
}