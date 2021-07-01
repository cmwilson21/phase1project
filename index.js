//User input - Dropdown box selects the book
//Something happens - The page loads characters from the book
//Something else happens - the drop down changes colors on mouse over.

//Events 
//Mouseover/Mouseout color change on drop down box
//Selection pulls in data from JSON to display that filters characters ("click")
//*Create a search button - if there's time

//Node Getters
//const characterDisplay = document.getElementById("display");
// const books = document.getElementById("books");
const getForm = () => document.getElementById("form");
const getSelect = () => document.getElementById("select-books");
const displayCharacter = () => document.getElementById("display");

// Event Listeners
document.addEventListener('DOMContentLoaded',() => {
    getForm().addEventListener('submit', submitForm);
})

document.getElementById('select-books').addEventListener('mouseover', function() {
    document.getElementById('select-books').style.backgroundColor = "white";
});

document.getElementById('select-books').addEventListener('mouseout', function() {
    document.getElementById('select-books').style.backgroundColor = "rgb(179, 177, 177)";
});


//Functions
// function show(books) {
//     const display = document.getElementById("display");
//     display.innerHTML = books.option[books.selectedIndex[1]].data[0].appendChild(display);
// }

// const obj = JSON.parse();
// document.getElementById("display").innerHTML =
// obj.name + obj.title + obj.description;

const submitForm = e => {
    e.preventDefault();
    let title = getSelect().value;
    fetch('http://localhost:3000/characters')
    .then(respond => respond.json())
    .then(characters => {
          let filteredCharacters = characters.filter(character => character.books.find(book => title))
          filteredCharacters.forEach( character => {
             let p = document.createElement('p');
             
             p.innerText = character.name;
             displayCharacter().appendChild(p);
             
            //  p.innerText = character.description;
          })
        })
    }




//Fetch - THIS FUNCTION CONNECTS WITH THE ONE BELOW THAT PROVES JSON
// .then(function(characters){
//     let filteredCharacters=characters.filter(character => character.books.find(book =)
//     document.getElementById('display').innerText=data[0];
// })



// .then(function(json){
//  console.log(json[0]);
// //  return show;
// })



//THIS FUNCTION PROVES JSON IS CONNECTED AT THE BOTTOM OF THE PAGE - FOR TESTING
// function appendData(data) {
// const mainContainer = document.getElementById("myData");
// for (let i = 0; i < data.length; i++) {
//     const div = document.createElement("div");
//     div.innerHTML = 'Name: ' + ' ' + data[i].name + ' ' + data[i].title + ' ' + data[i].description;
//     mainContainer.appendChild(div);
// }
// }



//THIS IS AN ATTEMPT TO POPULATE THE SELECT DROP DOWN WITH JSON DATA

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Select a Book';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// fetch(url)
//     .then(function(response) {
//     return response.json()
//     })
//     .then(function(data) {
//         let option;

//         for (let i = 0; i < data.length; i++) {
//             option = document.createElement('option');
//             option.text = data[i].book;
//             option.value = data[i].name;
//             dropdown.add(option);
//         }
//     });